import { PluginBase } from "../PluginBase.js";
import { EnvInfoPlugin } from "./EnvInfoPlugin.js";
import { NetworkInfoPlugin } from "./NetworkInfoPlugin.js";
import { OsInfoPlugin } from "./OsInfoPlugin.js";
import { UserInfoPlugin } from "./UserInfoPlugin.js";

export const enumerationPlugins: Array<PluginBase> = [
    new NetworkInfoPlugin(),
    new OsInfoPlugin(),
    new EnvInfoPlugin(),
    new UserInfoPlugin()
];