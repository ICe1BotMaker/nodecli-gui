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
    }
    addComponent(component, x, y) {
        component.x = x;
        component.y = y;
        this.components = [...this.components, component];
    }
    show(time = 100) {
        process.stdout.write(`\x1B[?25l`);
        setInterval(() => {
            console.clear();
            this.components.forEach(component => {
                this.moveCursor(component.x, component.y);
                console.log(component.text);
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
        exec(`pkg . -c pkg-config.json`, { cwd: `./` }, (err, stdout, stderr) => {
            console.log(stdout);
        });
    }
}
