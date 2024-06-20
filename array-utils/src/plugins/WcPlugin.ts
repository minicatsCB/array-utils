const { spawn } = require('child_process');

import { PluginBase } from "./PluginBase";

export class WcPlugin extends PluginBase {
    private readonly IMAGE_URI: string = `${__dirname}/assets/wc.png`;

    constructor() {
        super('wc');
    }

    onError(err: any): void {
        console.log("Error while executing child in wc:", err);
    }

    run(): void {
        const cmd: string = "eog";
        const cmdParams: Array<string> = ["-f", this.IMAGE_URI];
        spawn(cmd, cmdParams).on('error', this.onError);
    }
}