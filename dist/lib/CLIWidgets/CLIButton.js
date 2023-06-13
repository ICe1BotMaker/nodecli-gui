import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Label
 */
export class CLIButton extends CLIGlobal {
    constructor(text) {
        super();
        this.labelText = text;
    }
    return() {
        return {
            type: `button`,
            text: this.labelText
        };
    }
}
