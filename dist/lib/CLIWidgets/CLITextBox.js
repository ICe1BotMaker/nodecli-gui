import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI TextBox
 */
export class CLITextBox extends CLIGlobal {
    constructor({ text = `` }) {
        super();
        this.text = text;
        this.focus = false;
        this.id = Math.random().toString(36).substring(2);
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
            type: `textbox`,
            id: this.id,
            text: this.text,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent,
            focus: this.focus
        };
    }
}
