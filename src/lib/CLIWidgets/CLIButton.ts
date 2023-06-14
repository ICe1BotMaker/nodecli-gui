import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Button
 */
export class CLIButton extends CLIGlobal {
    labelText: string;
    pickEvent: Function;
    selectEvent: Function;
    id: string;

    public constructor(text: string) {
        super();

        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
    }

    /**
     * @param {'pick' | 'select'} type
     */
    public on(type: string, event: Function) {
        if (type === `pick`) this.pickEvent = event;
        if (type === `select`) this.selectEvent = event;
    }

    public return() {
        return {
            type: `button`,
            id: this.id,
            text: this.labelText,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent
        };
    }
}