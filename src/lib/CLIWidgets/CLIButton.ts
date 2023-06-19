import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Button
 */
export class CLIButton extends CLIGlobal {
    id: string;
    
    labelText: string;

    pickEvent: Function;
    selectEvent: Function;

    public constructor({ text }) {
        super();

        this.labelText = text;
        this.id = this.generateId();
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
            type: `button`,

            id: this.id,

            text: this.labelText,
            
            pickEvent: this.pickEvent,
            selectEvent: this.selectEvent
        };
    }
}