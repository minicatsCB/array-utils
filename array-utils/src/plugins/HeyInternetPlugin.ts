const { spawn } = require('child_process');

import { PluginBase } from "./PluginBase";

export class HeyInternetPlugin extends PluginBase {
    constructor() {
        super('cats');
    }

    run(): void {
        let cmd: string = "xdg-open";
        let url: string = "https://cat-bounce.com/";
        let params: Array<string> = [url];
        let child: any = spawn(cmd, params);
        child.on('error', function (err: any) {
            console.log("Error while executing child in heyInternet:", err);
        });
    }
}