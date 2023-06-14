import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI Button
 */
export class CLIButton extends CLIGlobal {
    constructor(text) {
        super();
        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
    }
    /**
     * @param {'pick' | 'select'} type
     */
    on(type, event) {
        if (type === `pick`)
            this.pickEvent = event;
        if (type === `select`)
            this.selectEvent = event;
    }
    return() {
        return {
            type: `button`,
            id: this.id,
            text: this.labelText,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent
        };
    }
}
