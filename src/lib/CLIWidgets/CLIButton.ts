import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Label
 */
export class CLIButton extends CLIGlobal {
    labelText: string;

    public constructor(text: string) {
        super();

        this.labelText = text;
    }

    public return() {
        return {
            type: `button`,
            text: this.labelText
        };
    }
}