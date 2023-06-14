import chalk from 'chalk';
import { moveCursor } from 'readline';
/**
 * CLI Global
 */
export class CLIGlobal {
    constructor() { }
    moveCursor({ x, y }) {
        moveCursor(process.stdout, x, y);
    }
    throwError({ code, message }) {
        throw new Error(`(code: ${code}) ${chalk.redBright.underline(message)}`);
    }
}
