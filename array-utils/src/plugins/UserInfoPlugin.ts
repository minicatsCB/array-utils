import { PluginBase } from "./PluginBase";
import { UserDetails } from "../types/typings";
import * as os from "node:os";

export class UserInfoPlugin extends PluginBase {
    constructor() {
      super("userInfo");
    }
  
    run(): UserDetails {
      return os.userInfo();
    }
}