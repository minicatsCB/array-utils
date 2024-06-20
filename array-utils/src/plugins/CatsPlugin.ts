const { spawn } = require('child_process');

import { PluginBase } from "./PluginBase";

export class CatsPlugin extends PluginBase {
    constructor() {
        super('cats');
    }

    run({ time = 3000 }: { time?: number } = {}): void {
        const numberOfImages: number = 6;

    let cmd: string = "gsettings";
    let defaultImgUri: string = `${__dirname}/assets/bg_cat_0.jpg`;
    let params: Array<string> = ["set", "org.gnome.desktop.background", "picture-uri", defaultImgUri];

    setInterval(() => {
        var randomIndex: number = Math.floor(Math.random() * numberOfImages);
        const imgUri: string = `${__dirname}/assets/bg_cat_${randomIndex}.jpg`;
        params[3] = imgUri;
        let child: any = spawn(cmd, params);
        child.on('error', function (err: any) {
            console.log("Error while executing child in catscatscatscats:", err);
        });
    }, time);
    }
}