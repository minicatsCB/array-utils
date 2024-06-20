const { spawn } = require('child_process');

import { PluginBase } from "./PluginBase";

export class WcPlugin extends PluginBase {
    constructor() {
        super('wc');
    }

    run(): void {
        let cmd: string = "eog";
        let uri: string = `${__dirname}/assets/wc.png`;
        let params: Array<string> = ["-f", uri];
        let child: any = spawn(cmd, params);
        child.on('error', function (err: any) {
            console.log("Error while executing child in wc:", err);
        });
    }
}