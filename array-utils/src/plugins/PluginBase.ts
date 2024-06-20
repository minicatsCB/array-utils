export abstract class PluginBase {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }

    abstract run(): any;

    getName(): string {
        return this.name;
    }
}