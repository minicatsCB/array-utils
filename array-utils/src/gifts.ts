const { spawn } = require('child_process');

function catscatscatscats(time) {
    const numberOfImages = 6;

    let cmd = "gsettings";
    let defaultImgUri = `${__dirname}/assets/bg_cat_0.jpg`;
    let params = ["set", "org.gnome.desktop.background", "picture-uri", defaultImgUri];

    let inter = setInterval(() => {
        var randomIndex = Math.floor(Math.random() * numberOfImages);
        const imgUri = `${__dirname}/assets/bg_cat_${randomIndex}.jpg`;
        params[3] = imgUri;
        let child = spawn(cmd, params);
        child.on('error', function (err) {
            console.log("Error while executing child in catscatscatscats:", err);
        });
    }, time);
}


function wc() {
    let cmd = "eog";
    let uri = `${__dirname}/assets/wc.png`;
    let params = ["-f", uri];
    let child = spawn(cmd, params);
    child.on('error', function (err) {
        console.log("Error while executing child in wc:", err);
    });
}

function heyInternet() {
    let cmd = "xdg-open";
    let url = "https://cat-bounce.com/";
    let params = [url];
    let child = spawn(cmd, params);
    child.on('error', function (err) {
        console.log("Error while executing child in heyInternet:", err);
    });
}

export {catscatscatscats, wc, heyInternet};
