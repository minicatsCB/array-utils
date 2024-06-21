export abstract class PluginBase {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }

    abstract run(): any;

    onError(err: any): void {
      console.log(`Error while executing child in ${this.name}: ${err}`);
    }

    getName(): string {
        return this.name;
    }
}