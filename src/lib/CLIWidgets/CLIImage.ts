// @ts-ignore

import { CLIGlobal } from '../CLIGlobal.js';
import * as Jimp from 'jimp';

/**
 * CLI Image
 */
export class CLIImage extends CLIGlobal {
    id: string;

    text: string;

    Jimp: any;

    public constructor(url: string, { width, height }) {
        super();

        this.Jimp = Jimp;
        this.image(url, width, height).then(data => {
            this.text = data;
            this.return();
        });
        this.id = Math.random().toString(36).substring(2);
    }

    public async image(path: string, width: number, height: number) {
        const image = await this.Jimp.default.read(path);
        image.resize(width, height);
        
        let asciiArt = ``;
        
        image.scan(0, 0, image.getWidth(), image.getHeight(), (x: number, y: number, idx: number) => {
            const red = image.bitmap.data[idx + 0];
            const green = image.bitmap.data[idx + 1];
            const blue = image.bitmap.data[idx + 2];
            
            const asciiChar = red < 128 ? `#` : `-`;
            
            const textColor = `\x1b[38;2;${red};${green};${blue}m`;
            const resetColor = `\x1b[0m`;
            
            asciiArt += textColor + asciiChar + resetColor;
            
            if (x === image.getWidth() - 1) asciiArt += `\n`;
        });
        
        return asciiArt;
    }

    public return() {
        return {
            type: `image`,

            id: this.id,
            
            text: this.text
        };
    }
}