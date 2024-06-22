import { CatsPlugin } from "./CatsPlugin";
import { WcPlugin } from "./WcPlugin";
import { HeyInternetPlugin } from "./HeyInternetPlugin";
import { PluginBase } from "../PluginBase";

export const funPlugins: Array<PluginBase> = [
    new CatsPlugin(),
    new WcPlugin(),
    new HeyInternetPlugin()
];