const { spawn } = require('child_process');

import { PluginBase } from "./PluginBase";

export class CatsPlugin extends PluginBase {
    private readonly IMAGES_NO: number = 6;
    private readonly FREQENCY_MS: number = 3000;
    private readonly DEFAULT_IMG_URI: string = `${__dirname}/assets/bg_cat_0.jpg`;

    private intervalId: NodeJS.Timeout;

    constructor() {
        super('cats');
    }
   
    onError(err: any): void {
        clearInterval(this.intervalId);
        console.log("Error while executing child in cats:", err);
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.IMAGES_NO);
    }

    getImageUri(index: number): string {
        return `${__dirname}/assets/bg_cat_${index}.jpg`;
    }

    run(): void {
        const cmd: string = "gsettings";
        const cmdParams: Array<string> = ["set", "org.gnome.desktop.background", "picture-uri", this.DEFAULT_IMG_URI];

        this.intervalId = setInterval(() => {
            cmdParams[3] = this.getImageUri(this.getRandomIndex());
            spawn(cmd, cmdParams).on('error', this.onError.bind(this));
        }, this.FREQENCY_MS);
    }
}