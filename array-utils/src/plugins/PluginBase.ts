export abstract class PluginBase {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }

    abstract run(params?: { [key: string]: any }): any;

    getName(): string {
        return this.name;
    }
}