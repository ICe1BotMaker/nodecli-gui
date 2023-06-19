import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Label
 */
export class CLILabel extends CLIGlobal {
    constructor({ text }) {
        super();
        this.labelText = text;
        this.id = this.generateId();
    }
    return() {
        return {
            type: `label`,
            id: this.id,
            text: this.labelText
        };
    }
}
