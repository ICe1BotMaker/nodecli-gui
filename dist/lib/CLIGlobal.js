import chalk from 'chalk';
import { moveCursor } from 'readline';
/**
 * CLI Global
 */
export class CLIGlobal {
    constructor() {
        // this.cli = createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });
    }
    moveCursor(x, y) {
        moveCursor(process.stdout, x, y);
    }
    throwError(code, message) {
        throw new Error(`(code: ${code}) ${chalk.redBright.underline(message)}`);
    }
}
