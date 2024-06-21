const { spawn } = require('child_process');

import { PluginBase } from "../PluginBase";

export class HeyInternetPlugin extends PluginBase {
    private readonly URL: string = "https://cat-bounce.com/";

    constructor() {
        super('heyInternet');
    }

    run(): void {
        const cmd: string = "xdg-open";
        const cmdParams: Array<string> = [this.URL];
        spawn(cmd, cmdParams).on('error', this.onError.bind(this));
    }
}