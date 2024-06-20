import { EnvInfoPlugin } from "./EnvInfoPlugin";
import { NetworkInfoPlugin } from "./NetworkInfoPlugin";
import { OsInfoPlugin } from "./OsInfoPlugin";
import { PluginBase } from "./PluginBase";
import { UserInfoPlugin } from "./UserInfoPlugin";


export const plugins: Array<PluginBase> = [
    new NetworkInfoPlugin(),
    new OsInfoPlugin(),
    new EnvInfoPlugin(),
    new UserInfoPlugin()
];