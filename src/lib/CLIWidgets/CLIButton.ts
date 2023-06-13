import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Button
 */
export class CLIButton extends CLIGlobal {
    labelText: string;

    public constructor(text: string) {
        super();

        this.labelText = text;
    }

    /**
     * @param {'pick' | 'select'} type
     */
    public on(type: string, event: Function) {
        event();
    }

    public return() {
        return {
            type: `button`,
            text: this.labelText
        };
    }
}