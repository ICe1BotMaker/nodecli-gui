import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI RadioButton
 */
export class CLIRadioButton extends CLIGlobal {
    constructor({ text, name, bool = false, beforeText = `✅` }) {
        super();
        this.labelText = text;
        this.id = this.generateId();
        this.toggleState = bool;
        this.beforeText = beforeText;
        this.name = name;
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
            type: `radiobutton`,
            id: this.id,
            name: this.name,
            text: this.labelText,
            beforeText: this.beforeText,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent,
            toggleState: this.toggleState
        };
    }
}
