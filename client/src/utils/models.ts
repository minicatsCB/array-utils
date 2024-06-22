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

export interface NetworkDetails {
    ifaceName: string;
    address: string;
    netmask: string;
    cidr: string;
    family: string;
    mac: string;
    internal: boolean;
}


export interface EnvDetails {
    path: string;
    home: string;
    user: string;
    pwd: string;
    lang: string;
    shell: string;
}

export interface Machine {
    id: string;
    networkInterfaces: Array<NetworkDetails>;
    os: OsDetails;
    env: EnvDetails;
    userInfo: UserDetails;
}

export interface ResponseData<T> {
    data: T;
}