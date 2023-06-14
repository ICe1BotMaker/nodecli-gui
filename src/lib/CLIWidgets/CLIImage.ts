import { CLIGlobal } from '../CLIGlobal.js';
import Jimp from 'jimp/es/index.js';

async function image(path: string, width: number, height: number) {
    const image = await Jimp.read(path);
    image.resize(width, height);
    
    let asciiArt = ``;
    
    function setTextColor(color: any) {
        return `\x1b[38;2;${color.r};${color.g};${color.b}m`;
    }
    
    image.scan(0, 0, image.getWidth(), image.getHeight(), (x, y, idx) => {
        const red = image.bitmap.data[idx + 0];
        const green = image.bitmap.data[idx + 1];
        const blue = image.bitmap.data[idx + 2];
        
        const asciiChar = red < 128 ? `#` : `-`;
        
        const textColor = setTextColor({ r: red, g: green, b: blue });
        const resetColor = `\x1b[0m`;
        
        asciiArt += textColor + asciiChar + resetColor;
        
        if (x === image.getWidth() - 1) asciiArt += `\n`;
    });
    
    return asciiArt;
}

/**
 * CLI Image
 */
export class CLIImage extends CLIGlobal {
    id: string;

    text: object;

    public constructor(url: string, { width, height }) {
        super();

        this.text = image(url, width, height);
        this.id = Math.random().toString(36).substring(2);
    }

    public return() {
        return {
            type: `image`,

            id: this.id,
            
            text: this.text
        };
    }
}