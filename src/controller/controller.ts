import { CmdKeys } from "../commands/cmd.enum";
import { AvailableLanguages } from "../constants";

import { InstallService } from "../service";

import type { OptType } from "../types";

export class Controller {
  public control(cmd: string, opt?: Record<string, any>) {
    try {
      switch (cmd) {
        case CmdKeys.INSTALL:
          if (!Object.values(AvailableLanguages).includes(opt?.["lang"])) {
            console.log(
              `${opt?.["lang"]} not available programming language...`
            );
            return;
          }

          return new InstallService().installPackage(
            opt?.["lang"] ?? AvailableLanguages.JS
          );

          break;
      }

      console.log(cmd, opt);
    } catch (e) {
      throw e;
    }
  }
}
