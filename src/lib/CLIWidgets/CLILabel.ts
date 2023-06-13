import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Label
 */
export class CLILabel extends CLIGlobal {
    labelText: string;

    public constructor(text: string) {
        super();

        this.labelText = text;
    }

    public return() {
        return {
            type: `label`,
            text: this.labelText
        };
    }
}