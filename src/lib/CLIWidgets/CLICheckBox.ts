import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI CheckBox
 */
export class CLICheckBox extends CLIGlobal {
    id: string;

    labelText: string;
    beforeText: string;

    pickEvent: Function;
    selectEvent: Function;

    toggleState: boolean;
    
    public constructor({ text, bool = false }) {
        super();

        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
        
        this.toggleState = bool;
        this.beforeText = `✅`;
    }

    /**
     * @param {'pick' | 'select'} type
     */
    public on(type: string, event: Function = () => {}) {
        if (type === `pick`) this.pickEvent = event;
        if (type === `select`) this.selectEvent = event;
    }

    public return() {
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