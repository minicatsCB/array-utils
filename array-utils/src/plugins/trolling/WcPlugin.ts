import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { PluginBase } from "../PluginBase.js";

export class WcPlugin extends PluginBase {
    private readonly IMAGE_NAME: string = 'wc.png';

    constructor() {
        super('wc');
    }

    getImageUri(): string {  
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        return `${__dirname}/assets/${this.IMAGE_NAME}`;
    }

    run(): void {
        const cmd: string = "eog";
        const cmdParams: Array<string> = ["-f", this.getImageUri()];
        spawn(cmd, cmdParams).on('error', this.onError.bind(this));
    }
}