const { exec } = require("child_process");

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

runPlugin(plugins[0]).then(data => console.log(JSON.stringify(data, null, 2)));