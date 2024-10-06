import { execSync } from "node:child_process";

import { BLOCKCHAIN_LOGS_FILE } from "../../constants";

export class MonitService {
  public getLogs(isPm2Logs?: boolean) {
    try {
      const cmd = isPm2Logs
        ? "pm2 logs arcanum"
        : `cat ${BLOCKCHAIN_LOGS_FILE}`;

      execSync(cmd, {
        encoding: "utf-8",
        stdio: "inherit",
      });
    } catch (e) {
      console.log(e);
    }
  }
}
