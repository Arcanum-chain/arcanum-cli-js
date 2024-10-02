#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";

import { Commands } from "./commands";

const program = new Command();

console.log(figlet.textSync("Arcanum"));

program
  .name("Arcanum-cli")
  .description("CLI for managing the Arcanum node")
  .version("0.0.1");

Object.values(Commands).forEach((cmd) => {
  const newCmd = program.command(cmd.key).description(cmd.description);

  if (cmd.options.length > 0) {
    cmd.options.forEach((opt) => {
      newCmd.option(opt.key, opt.desc, opt.defaultValue);
    });
  }

  newCmd.action(cmd.action);
});

if (!process.argv.slice(2).length) {
  program.help();
}

program.parse(process.argv);
