import { PluginBase } from "../PluginBase";
import { EnvInfoPlugin } from "./EnvInfoPlugin";
import { NetworkInfoPlugin } from "./NetworkInfoPlugin";
import { OsInfoPlugin } from "./OsInfoPlugin";
import { UserInfoPlugin } from "./UserInfoPlugin";

export const enumerationPlugins: Array<PluginBase> = [
    new NetworkInfoPlugin(),
    new OsInfoPlugin(),
    new EnvInfoPlugin(),
    new UserInfoPlugin()
];