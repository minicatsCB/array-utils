import * as os from "node:os";
import { UserDetails, OsDetails, NetworkInterfacesDetails, EnvDetails, CustomPlugin } from "./typings";
import { getIpv4Interfaces } from "./utils";

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

export const plugins: Array<CustomPlugin> = [
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