import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Label
 */
export class CLILabel extends CLIGlobal {
    constructor(text) {
        super();
        this.labelText = text;
    }
    return() {
        return {
            type: `label`,
            text: this.labelText
        };
    }
}
