import { NetworkInterfaceInfoIPv4, UserInfo } from "node:os";

export interface OsDetails {
    arch: string;
    hostname: string;
    platform: NodeJS.Platform;
    release: string;
    type: string;
}

export type UserDetails = UserInfo<string>

export type NetworkInterfacesDetails = NodeJS.Dict<NetworkInterfaceInfoIPv4>
export type EnvDetails = NodeJS.Dict<string>

export interface CustomPlugin {
    key: string;
    plugin: Function;
}