import { PluginBase } from "./PluginBase";

export abstract class EnumerationPlugin extends PluginBase {  
    constructor(name: string) {
      super(name);
    }

    abstract mapData(data: any): any;
}