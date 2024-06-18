type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'haiku' | 'linux' | 'openbsd' | 'sunos' | 'win32' | 'cygwin' | 'netbsd';

export interface OsDetails {
    arch: string;
    hostname: string;
    platform: Platform;
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

interface Dictionary<T> {
    [Key: string]: T;
}

interface IPv4NetworkInterface {
    address: string;
    netmask: string;
    mac: string;
    internal: boolean;
    cidr: string | null;
    family: 'IPv4';
    scopeid?: undefined;
}

export type NetworkInterfacesDetails = Dictionary<IPv4NetworkInterface>

export type EnvDetails = Dictionary<string>

export interface Machine {
    id: string;
    networkInterfaces: NetworkInterfacesDetails;
    os: OsDetails;
    env: EnvDetails;
    userInfo: UserDetails;
}

export interface ReqData<T> {
    data: T;
}