import { NetworkInterfaceInfoIPv4, UserInfo } from "node:os";

export interface OsDetails {
    arch: string;
    hostname: string;
    platform: NodeJS.Platform;
    release: string;
    type: string;
}
export interface UserDetails {
    username: string;
    uid: number;
    gid: number;
    shell: string;
    homedir: string;
}
export interface NetworkDetails {
    ifaceName: string;
    address: string;
    netmask: string;
    cidr: string;
    family: string;
    mac: string;
    internal: boolean;
}
//export type NetworkInterfacesDetails = NodeJS.Dict<NetworkInterfaceInfoIPv4>
export interface EnvDetails {
    path: string;
    home: string;
    user: string;
    pwd: string;
    lang: string;
    shell: string;
}