import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI CheckBox
 */
export class CLICheckBox extends CLIGlobal {
    constructor({ text, bool = false, beforeText = `✅` }) {
        super();
        this.labelText = text;
        this.id = this.generateId();
        this.toggleState = bool;
        this.beforeText = beforeText;
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
