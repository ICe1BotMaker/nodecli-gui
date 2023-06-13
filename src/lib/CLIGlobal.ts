import chalk from 'chalk';
import { Interface, createInterface, moveCursor } from 'readline';

/**
 * CLI Global
 */
export class CLIGlobal {
    cli: Interface;

    public constructor() {
        // this.cli = createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });
    }

    public moveCursor(x: number, y: number) {
        moveCursor(process.stdout, x, y);
    }

    public throwError(code: string, message: string) {
        throw new Error(`(code: ${code}) ${chalk.redBright.underline(message)}`);
    }
}