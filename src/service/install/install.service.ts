import fs from "node:fs";
import { execSync, spawn } from "node:child_process";
import path from "node:path";
import { homedir } from "node:os";

import {
  AvailableLanguages,
  COMMON_DIR,
  GITHUB_REPO_URL,
} from "../../constants";

export class InstallService {
  private isExistGit = false;

  public installPackage(lng: AvailableLanguages) {
    this.checkGit();

    if (this.isExistGit) {
      const pathToDir = path.resolve(homedir(), COMMON_DIR);
      this.checkIsNotEmptyDir(pathToDir);

      console.log("Installing...");

      execSync(`cd ~/${COMMON_DIR} && git clone ${GITHUB_REPO_URL}`, {
        stdio: "pipe",
      });

      console.log("Successful installed project!");
    }
  }

  private checkIsNotEmptyDir(path: string) {
    const exp = fs.existsSync(path);

    if (exp) {
      return true;
    } else {
      fs.mkdirSync(path);
      return true;
    }
  }

  private checkGit() {
    try {
      execSync("git -v", { stdio: "pipe" });

      this.isExistGit = true;
    } catch (e) {
      console.log("Please install GIT...");

      this.isExistGit = false;
    }
  }
}
