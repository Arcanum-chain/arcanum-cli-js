import path from "node:path";
import { homedir } from "node:os";

export enum AvailableLanguages {
  JS = "js",
  RUST = "rust",
}

export const COMMON_DIR = ".arcanum";
export const JS_PROJECT_DIR = "arcanum-js";
export const RUST_PROJECT_DIR = "arcanum-rust";

export const JS_GITHUB_REPO_URL =
  "https://github.com/Arcanum-chain/arcanum-js.git";
export const RUST_GITHUB_REPO_URL =
  "https://github.com/Arcanum-chain/arcanum-js.git";

export const BLOCKCHAIN_LOGS_FILE_PATH = path.resolve(
  homedir(),
  COMMON_DIR,
  "blockchain.logs"
);

export const BLOCKCHAIN_LOGS_FILE = `~/${COMMON_DIR}/blockchain.logs`;
