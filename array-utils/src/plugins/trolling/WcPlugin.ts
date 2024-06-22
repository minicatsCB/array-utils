const { spawn } = require('child_process');

import { PluginBase } from "../PluginBase";

export class WcPlugin extends PluginBase {
    private readonly IMAGE_URI: string = `${__dirname}/assets/wc.png`;

    constructor() {
        super('wc');
    }

    run(): void {
        const cmd: string = "eog";
        const cmdParams: Array<string> = ["-f", this.IMAGE_URI];
        spawn(cmd, cmdParams).on('error', this.onError.bind(this));
    }
}