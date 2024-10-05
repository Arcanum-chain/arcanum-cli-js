import { execSync } from "node:child_process";
import path from "node:path";
import { homedir } from "node:os";

import { COMMON_DIR, JS_PROJECT_DIR } from "../../constants";

export class StartService {
  public start(name?: string) {
    try {
      const pathToDir = path.resolve(homedir(), COMMON_DIR, JS_PROJECT_DIR);

      console.log("Started...");

      console.log("Building app...");

      execSync(`npm run build && npm run prod:pm2 ${name ?? ""}`, {
        stdio: "inherit",
        cwd: pathToDir,
        encoding: "utf-8",
      });

      console.log("Successful started node...");
    } catch (e) {
      console.log(e);
    }
  }
}
