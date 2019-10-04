const { spawnSync} = require('child_process');

let gifts = {
    catscatscatscats: function (time){
        const numberOfImages = 5;

        let cmd = "gsettings";
        let defaultImgUri =`${__dirname}/assets/bg_cat_0.jpg`;
        let params = ["set", "org.gnome.desktop.background", "picture-uri", defaultImgUri];

        let inter = setInterval(() => {
        	var randomIndex = Math.floor(Math.random() * numberOfImages);
            imgUri = `${__dirname}/assets/bg_cat_${randomIndex}.jpg`;
        	params[3] = imgUri;
        	spawnSync(cmd, params);
        }, time);
    }
}

module.exports = gifts;
