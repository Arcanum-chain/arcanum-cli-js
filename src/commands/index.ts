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
};
