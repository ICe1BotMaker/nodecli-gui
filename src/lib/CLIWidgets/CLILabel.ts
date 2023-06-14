import { CLIGlobal } from '../CLIGlobal.js';

/**
 * CLI Label
 */
export class CLILabel extends CLIGlobal {
    id: string;
    
    labelText: string;

    public constructor({ text }) {
        super();

        this.labelText = text;
        this.id = Math.random().toString(36).substring(2);
    }

    public return() {
        return {
            type: `label`,

            id: this.id,
            
            text: this.labelText
        };
    }
}