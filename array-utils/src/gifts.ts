const { spawn } = require('child_process');

function catscatscatscats(time: number): void {
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


function wc(): void {
    let cmd: string = "eog";
    let uri: string = `${__dirname}/assets/wc.png`;
    let params: Array<string> = ["-f", uri];
    let child: any = spawn(cmd, params);
    child.on('error', function (err: any) {
        console.log("Error while executing child in wc:", err);
    });
}

function heyInternet(): void {
    let cmd: string = "xdg-open";
    let url: string = "https://cat-bounce.com/";
    let params: Array<string> = [url];
    let child: any = spawn(cmd, params);
    child.on('error', function (err: any) {
        console.log("Error while executing child in heyInternet:", err);
    });
}

export {catscatscatscats, wc, heyInternet};
