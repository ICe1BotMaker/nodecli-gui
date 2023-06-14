import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Label
 */
export class CLILabel extends CLIGlobal {
    constructor(text) {
        super();
        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
    }
    return() {
        return {
            type: `label`,
            id: this.id,
            text: this.labelText
        };
    }
}
