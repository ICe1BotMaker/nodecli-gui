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

    public constructor({ text, bool, beforeText = `✅` }) {
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