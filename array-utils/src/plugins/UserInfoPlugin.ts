import { PluginBase } from "./PluginBase";
import { UserDetails } from "../types/index";
import * as os from "node:os";

export class UserInfoPlugin extends PluginBase {
    constructor() {
      super("userInfo");
    }
  
    run(): UserDetails {
      return os.userInfo();
    }
}