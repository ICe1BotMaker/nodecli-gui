import chalk from 'chalk';
import { moveCursor } from 'readline';

/**
 * CLI Global
 */
export class CLIGlobal {
    public constructor() {}

    public moveCursor(x: number, y: number) {
        moveCursor(process.stdout, x, y);
    }

    public throwError(code: string, message: string) {
        throw new Error(`(code: ${code}) ${chalk.redBright.underline(message)}`);
    }
}