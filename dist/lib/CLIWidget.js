import { CLIGlobal } from './CLIGlobal.js';
/**
 * CLI Widget
 */
export class CLIWidget extends CLIGlobal {
    constructor() { super(); }
    /**
     * @param {'pick' | 'select'} type
     */
    on(type, event) {
        if (type === `pick`)
            this.pickEvent = event;
        if (type === `select`)
            this.selectEvent = event;
    }
}
