import chalk from 'chalk';
import { moveCursor } from 'readline';

interface IMoveCursor {
    x: number;
    y: number;
}

interface IThrowError {
    code: string;
    message: string;
}

/**
 * CLI Global
 */
export class CLIGlobal {
    public constructor() {}

    public moveCursor({ x, y }: IMoveCursor) {
        moveCursor(process.stdout, x, y);
    }

    public throwError({ code, message }: IThrowError) {
        throw new Error(`(code: ${code}) ${chalk.redBright.underline(message)}`);
    }
}