import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Button
 */
export class CLIButton extends CLIGlobal {
    constructor(text) {
        super();
        this.labelText = text;
    }
    /**
     * @param {'pick' | 'select'} type
     */
    on(type, event) {
        event();
    }
    return() {
        return {
            type: `button`,
            text: this.labelText
        };
    }
}
