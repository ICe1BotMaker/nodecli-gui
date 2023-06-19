import { CLIGlobal } from '../CLIGlobal.js';
/**
 * CLI ComboBox
 */
export class CLIComboBox extends CLIGlobal {
    constructor({ text, bool = false, beforeText = `✅` }) {
        super();
        this.labelText = text;
        this.id = this.generateId();
        this.items = [];
        this.toggleState = bool;
        this.beforeText = beforeText;
    }
    addItem(item, { x = 0, y = 0 }) {
        item.name = this.id;
        item.x = x;
        item.y = y;
        this.items = [...this.items, item];
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
