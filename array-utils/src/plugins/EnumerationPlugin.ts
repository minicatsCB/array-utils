import { PluginBase } from "./PluginBase.js";

export abstract class EnumerationPlugin extends PluginBase {  
    constructor(name: string) {
      super(name);
    }

    abstract mapData(data: any): any;
}