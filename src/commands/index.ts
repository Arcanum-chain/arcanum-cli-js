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
  restart: {
    key: CmdKeys.RESTART,
    options: [
      {
        key: "--name <char>",
        desc: "Sets the pm2 name",
        defaultValue: "arcanum_node",
      },
    ],
    description: "Restart arcanum node",
    action: function (opt?: any) {
      controller.control(Commands.restart.key, opt);
    },
  },
  delete: {
    key: CmdKeys.DELETE,
    options: [
      {
        key: "--name <char>",
        desc: "Delete the pm2 process",
        defaultValue: "arcanum_node",
      },
    ],
    description: "Delete arcanum node",
    action: function (opt?: any) {
      controller.control(Commands.delete.key, opt);
    },
  },
  logs: {
    key: CmdKeys.LOGS,
    options: [
      {
        key: "--pm2",
        desc: "Is pm2 logs?",
        defaultValue: "",
      },
    ],
    description: "Get arcanum node logs",
    action: function (opt?: any) {
      controller.control(Commands.logs.key, opt);
    },
  },
};
