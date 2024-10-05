import { CmdKeys } from "./cmd.enum";
import { Controller } from "../controller/controller";

const controller = new Controller();

export const Commands = {
  install: {
    key: CmdKeys.INSTALL,
    options: [
      {
        key: "--lang <char>",
        desc: "Sets the node written in the selected language(JavaScript or Rust)",
        defaultValue: "js",
      },
    ],
    description: "Install arcanum node",
    action: function (opt?: any) {
      controller.control(Commands.install.key, opt);
    },
  },
  start: {
    key: CmdKeys.START,
    options: [
      {
        key: "--name <char>",
        desc: "Sets the pm2 name",
        defaultValue: "arcanum_node",
      },
    ],
    description: "Start arcanum node",
    action: function (opt?: any) {
      controller.control(Commands.start.key, opt);
    },
  },
};
