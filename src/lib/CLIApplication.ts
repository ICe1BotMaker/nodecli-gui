import chalk from 'chalk';
import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

import { CLIGlobal } from './CLIGlobal.js';

interface IComponent {
    type: string;
    text: string;
    style: object;

    x: number;
    y: number;
}

interface IAgent {
    x: number;
    y: number;
}

/**
 * CLI Application
 */
export class CLIApplication extends CLIGlobal {
    components: any[];
    agent: IAgent;

    public constructor() {
        super();

        this.components = [];
        this.agent = {
            x: 0,
            y: 0
        };
    }

    public delete(obj: any) {
        this.components.forEach((component, idx) => {
            if (component.id === obj.id) {
                delete this.components[idx];
            }
        });
    }

    public editText(obj: any, text: string) {
        this.components.forEach((component, idx) => {
            if (component.id === obj.id) {
                this.components[idx].text = text;
            }
        });
    }

    public addComponent(component: IComponent, x: number, y: number) {
        component.x = x;
        component.y = y;

        this.components = [...this.components, component];
    }

    public show(time: number = 100) {
        process.stdin.setRawMode(true);
        process.stdin.setEncoding(`utf-8`);

        process.stdin.on(`data`, (key: string) => {
            if (key === `\u0003`) process.exit();

            if (key === `\u001b[D`) this.agent.x -= 1;
            if (key === `\u001B[C`) this.agent.x += 1;
            if (key === `\u001B[A`) this.agent.y -= 1;
            if (key === `\u001B[B`) this.agent.y += 1;

            if (key === `\r` || key === `\n`) {
                this.components.forEach((component, idx) => {
                    if (this.agent.x === idx) {
                        if (component?.selectEvent) component.selectEvent();
                    }
                });
            }

            if (this.agent.x === -1) this.agent.x = 0;
            if (this.agent.x === this.components.length) this.agent.x = this.components.length - 1;
        });
        
        process.stdout.write(`\x1B[?25l`);

        setInterval(() => {
            console.clear();
            
            this.components.forEach((component, idx) => {
                this.moveCursor(component.x, component.y);

                if (this.agent.x === idx) {
                    if (component?.pickEvent || component?.selectEvent) {
                        console.log(chalk.italic.bold.overline.underline(component.text));
                    } else {
                        console.log(component.text);
                    }
                    
                    if (component?.pickEvent) component.pickEvent();
                } else {
                    console.log(component.text);
                }
            });
        }, time);
    }

    public setWindowTitle(title: string) {
        const config = JSON.parse(readFileSync(`./pkg-config.json`, `utf-8`));
        config.win.title = title.trim();

        writeFileSync(`./pkg-config.json`, JSON.stringify(config, null, 4));
    }

    public setWindowIcon(path: string) {
        const config = JSON.parse(readFileSync(`./pkg-config.json`, `utf-8`));
        config.icon = path.trim();

        writeFileSync(`./pkg-config.json`, JSON.stringify(config, null, 4));
    }

    public compile() {
        exec(`pkg . -c pkg-config.json`, { cwd: `./` });
    }
}