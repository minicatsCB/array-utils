import { PluginBase } from "../PluginBase";
import { UserDetails } from "../../types/index";
import * as os from "node:os";

export class UserInfoPlugin extends PluginBase {
    constructor() {
      super("userInfo");
    }

    mapUserInfo(userInfo: os.UserInfo<string>): UserDetails {
      return {
        username: userInfo.username,
        uid: userInfo.uid,
        gid: userInfo.gid,
        shell: userInfo.shell,
        homedir: userInfo.homedir
      };
    }

    getUserInfo(): UserDetails {
      return this.mapUserInfo(os.userInfo());
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