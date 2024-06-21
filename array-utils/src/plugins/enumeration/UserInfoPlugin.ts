import { PluginBase } from "../PluginBase";
import { UserDetails } from "../../types/index";
import * as os from "node:os";

export class UserInfoPlugin extends PluginBase {
    constructor() {
      super("userInfo");
    }

    getUserInfo(): UserDetails {
      return os.userInfo();
    }
  
    run(): UserDetails {
      try {
        return this.getUserInfo();
      } catch (err) {
        this.onError.call(this, err);
        return null;
      }
    }
}