import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI ComboBox
 */
export class CLIComboBox extends CLIGlobal {
    id: string;
    
    labelText: string;
    beforeText: string;

    pickEvent: Function;
    selectEvent: Function;
    changeEvent: Function;

    toggleState: boolean;

    items: any[];

    public constructor({ text, bool = false, beforeText = `✅` }) {
        super();

        this.labelText = text;
        this.id = this.generateId();
        this.items = [];
        this.toggleState = bool;
        this.beforeText = beforeText;
    }

    public addItem(item: any, { x = 0, y = 0 }) {
        item.name = this.id;
        item.x = x;
        item.y = y;
        
        this.items = [...this.items, item];
    }

    /**
     * @param {'pick' | 'select' | 'change'} type
     */
    public on(type: string, event: Function = () => {}) {
        if (type === `pick`) this.pickEvent = event;
        if (type === `select`) this.selectEvent = event;
        if (type === `change`) this.changeEvent = event;
    }

    public return() {
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