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

/**
 * CLI Application
 */
export class CLIApplication extends CLIGlobal {
    components: any[];
    agent: object;

    public constructor() {
        super();

        this.components = [];
        this.agent = {
            x: 0,
            y: 0
        };
    }

    public addComponent(component: IComponent, x: number, y: number) {
        component.x = x;
        component.y = y;

        this.components = [...this.components, component];
    }

    public show(time: number = 100) {
        process.stdout.write(`\x1B[?25l`);

        setInterval(() => {
            console.clear();
            
            this.components.forEach(component => {
                this.moveCursor(component.x, component.y);
                console.log(component.text);
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
        exec(`pkg . -c pkg-config.json`, { cwd: `./` }, (err, stdout, stderr) => {
            console.log(stdout);
        });
    }
}