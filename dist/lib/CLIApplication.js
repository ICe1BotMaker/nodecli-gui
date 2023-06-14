import chalk from 'chalk';
import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { CLIGlobal } from './CLIGlobal.js';
/**
 * CLI Application
 */
export class CLIApplication extends CLIGlobal {
    constructor() {
        super();
        this.components = [];
        this.agent = {
            x: 0
        };
    }
    find(obj) {
        let result;
        this.components.forEach((component, idx) => {
            if (component.id === obj.id)
                result = idx;
        });
        return result;
    }
    remove(obj) {
        this.components.splice(this.find(obj), 1);
    }
    modifyText(obj, { text }) {
        this.components[this.find(obj)].text = text;
    }
    setBeforeText(obj, { text }) {
        if (obj.type === `checkbox`) {
            this.components[this.find(obj)].beforeText = text;
        }
    }
    selectedItems(type = `checkbox`, { name } = { name: undefined }) {
        let result = [];
        this.components.forEach((component, idx) => {
            if (type === `checkbox`) {
                if (component.type === `checkbox` && component.toggleState) {
                    result = [...result, component];
                }
            }
            else if (type === `radiobutton`) {
                if (component.type === `radiobutton` && component.toggleState && component.name === name) {
                    result = [...result, component];
                }
            }
        });
        return result;
    }
    addComponent(component, { x, y }) {
        component.x = x;
        component.y = y;
        this.components = [...this.components, component];
    }
    show(time = 100) {
        process.stdin.setRawMode(true);
        process.stdin.setEncoding(`utf-8`);
        process.stdin.on(`data`, (key) => {
            if (key === `\u0003`) {
                console.clear();
                process.stdout.write(`\x1B[?25h`);
                process.exit();
            }
            if (key === `\u001b[D`)
                this.agent.x -= 1;
            if (key === `\u001B[C`)
                this.agent.x += 1;
            if (key === `\r` || key === `\n`) {
                this.components.forEach((component, idx) => {
                    if (this.agent.x === idx) {
                        if (component?.selectEvent) {
                            component.selectEvent();
                            if (component?.type === `checkbox`) {
                                component.toggleState = !component.toggleState;
                            }
                            else if (component?.type === `radiobutton`) {
                                this.selectedItems(`radiobutton`, { name: component.name }).forEach(item => {
                                    item.toggleState = false;
                                });
                                component.toggleState = true;
                            }
                        }
                    }
                });
            }
            if (this.agent.x === -1)
                this.agent.x = 0;
            if (this.agent.x === this.components.length)
                this.agent.x = this.components.length - 1;
        });
        process.stdout.write(`\x1B[?25l`);
        setInterval(() => {
            console.clear();
            this.components.forEach((component, idx) => {
                this.moveCursor({ x: component.x, y: component.y });
                if (this.agent.x === idx && (component?.pickEvent || component?.selectEvent)) {
                    if ([`checkbox`, `radiobutton`].includes(component.type) && component?.toggleState === true) {
                        console.log(`${component.beforeText}${chalk.italic.bold.overline.underline(component.text)}`);
                    }
                    else {
                        console.log(chalk.italic.bold.overline.underline(component.text));
                    }
                    if (component?.pickEvent)
                        component.pickEvent();
                }
                else {
                    if ([`checkbox`, `radiobutton`].includes(component.type) && component?.toggleState === true) {
                        console.log(`${component.beforeText}${component.text}`);
                    }
                    else {
                        console.log(component.text);
                    }
                }
            });
        }, time);
    }
    setWindowTitle(title) {
        const config = JSON.parse(readFileSync(`./pkg-config.json`, `utf-8`));
        config.win.title = title.trim();
        writeFileSync(`./pkg-config.json`, JSON.stringify(config, null, 4));
    }
    setWindowIcon(path) {
        const config = JSON.parse(readFileSync(`./pkg-config.json`, `utf-8`));
        config.icon = path.trim();
        writeFileSync(`./pkg-config.json`, JSON.stringify(config, null, 4));
    }
    compile() {
        exec(`pkg . -c pkg-config.json`, { cwd: `./` });
    }
}
