import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI CheckBox
 */
export class CLICheckBox extends CLIGlobal {
    constructor({ text, bool = false }) {
        super();
        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
        this.toggleState = bool;
        this.beforeText = `✅`;
    }
    /**
     * @param {'pick' | 'select'} type
     */
    on(type, event = () => { }) {
        if (type === `pick`)
            this.pickEvent = event;
        if (type === `select`)
            this.selectEvent = event;
    }
    return() {
        return {
            type: `checkbox`,
            id: this.id,
            text: this.labelText,
            beforeText: this.beforeText,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent,
            toggleState: this.toggleState
        };
    }
}
