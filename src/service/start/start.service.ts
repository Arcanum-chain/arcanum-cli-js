import { execSync } from "node:child_process";
import path from "node:path";
import { homedir } from "node:os";

import { COMMON_DIR, JS_PROJECT_DIR } from "../../constants";

export class StartService {
  private readonly projectDirJs = path.resolve(
    homedir(),
    COMMON_DIR,
    JS_PROJECT_DIR
  );

  public start(name?: string) {
    try {
      console.log("Started...");

      console.log("Building app...");

      execSync(`npm run build && npm run prod:pm2 ${name ?? "arcanum_node"}`, {
        stdio: "inherit",
        cwd: this.projectDirJs,
        encoding: "utf-8",
      });

      console.log("Successful started node...");
    } catch (e) {
      console.log(e);
    }
  }

  public restart(name?: string) {
    try {
      console.log("Restarting...");

      execSync(`npm run build && pm2 restart ${name ?? "arcanum_node"}`, {
        stdio: "inherit",
        encoding: "utf-8",
        cwd: this.projectDirJs,
      });

      console.log("Successful restart...");
    } catch (e) {
      console.log(e);
    }
  }

  public delete(name?: string) {
    try {
      console.log("Deleting...");

      execSync(`pm2 delete ${name ?? "arcanum"}`, {
        stdio: "pipe",
        encoding: "utf-8",
        cwd: this.projectDirJs,
      });

      console.log("Successful delete...");
    } catch (e) {
      console.log(e);
    }
  }
}
