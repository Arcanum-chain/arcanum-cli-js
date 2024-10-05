#! /usr/bin/env node

import fs from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { homedir } from "node:os";

import {
  AvailableLanguages,
  COMMON_DIR,
  JS_GITHUB_REPO_URL,
  RUST_GITHUB_REPO_URL,
  JS_PROJECT_DIR,
  RUST_PROJECT_DIR,
} from "../../constants";

export class InstallService {
  private isExistGit = false;

  public installPackage(lng: AvailableLanguages) {
    this.checkGit();

    if (this.isExistGit) {
      const pathToDir = path.resolve(homedir(), COMMON_DIR);
      const dirExist = this.checkIsNotEmptyDir(pathToDir);
      const projectDirExist = this.checkIsEmptyProjectDir(lng);

      let url: string = JS_GITHUB_REPO_URL;
      let projectDir = JS_PROJECT_DIR;

      if (lng === AvailableLanguages.JS) {
        url = JS_GITHUB_REPO_URL;
        projectDir = JS_PROJECT_DIR;
      } else if (lng === AvailableLanguages.RUST) {
        url = RUST_GITHUB_REPO_URL;
        projectDir = RUST_PROJECT_DIR;
      }

      if (dirExist && !projectDirExist) {
        console.log("Installing...");

        execSync(`cd ~/${COMMON_DIR} && git clone ${url}`, {
          stdio: "pipe",
        });

        console.log("Installed dependencies...");

        try {
          const initSubRepo = "&& git submodule init && git submodule update";

          execSync(`cd ~/${COMMON_DIR}/${projectDir} && npm i ${initSubRepo}`, {
            stdio: "inherit",
          });
        } catch (e) {
          console.log(`Installing dependencies error!\nDetails: ${e}`);
          return;
        }

        console.log("Successful installed project!");
      } else {
        console.log("Project has been installed!!!");
      }
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

  private checkIsEmptyProjectDir(lang: AvailableLanguages) {
    if (lang === AvailableLanguages.JS) {
      const pathToDir = path.resolve(homedir(), COMMON_DIR, JS_PROJECT_DIR);

      return fs.existsSync(pathToDir);
    } else if (lang === AvailableLanguages.RUST) {
      const pathToDir = path.resolve(homedir(), COMMON_DIR, RUST_PROJECT_DIR);

      return fs.existsSync(pathToDir);
    }

    return true;
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
