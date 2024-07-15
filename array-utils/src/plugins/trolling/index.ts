import { CatsPlugin } from "./CatsPlugin.js";
import { WcPlugin } from "./WcPlugin.js";
import { HeyInternetPlugin } from "./HeyInternetPlugin.js";
import { PluginBase } from "../PluginBase.js";

export const funPlugins: Array<PluginBase> = [
    new CatsPlugin(),
    new WcPlugin(),
    new HeyInternetPlugin()
];