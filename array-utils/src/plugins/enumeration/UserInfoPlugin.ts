import { UserDetails } from "../../types/index";
import * as os from "node:os";
import { EnumerationPlugin } from "../EnumerationPlugin";

export class UserInfoPlugin extends EnumerationPlugin {
    constructor() {
      super("userInfo");
    }

    mapData(userInfo: os.UserInfo<string>): UserDetails {
      return {
        username: userInfo.username,
        uid: userInfo.uid,
        gid: userInfo.gid,
        shell: userInfo.shell,
        homedir: userInfo.homedir
      };
    }

    getUserInfo(): UserDetails {
      return this.mapData(os.userInfo());
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