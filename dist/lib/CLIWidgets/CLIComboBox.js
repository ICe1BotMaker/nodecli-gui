import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI ComboBox
 */
export class CLIComboBox extends CLIGlobal {
    constructor({ text, bool, beforeText = `✅` }) {
        super();
        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
        this.items = [];
        this.toggleState = bool;
        this.beforeText = beforeText;
    }
    /**
     * @param {'pick' | 'select' | 'change'} type
     */
    on(type, event = () => { }) {
        if (type === `pick`)
            this.pickEvent = event;
        if (type === `select`)
            this.selectEvent = event;
        if (type === `change`)
            this.changeEvent = event;
    }
    return() {
        return {
            type: `combobox`,
            id: this.id,
            text: this.labelText,
            beforeText: this.beforeText,
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent,
            changeEvent: this.changeEvent,
            items: this.items
        };
    }
}
