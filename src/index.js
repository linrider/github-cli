import { Command } from "commander";

import { getUser, getRepos } from "./github.js";
import { printRepos, printUser } from "./output.js";

const program = new Command;

program
    .name("gitlab - cli")
    .description("Command-line tool for interacting with the GitHub API")
    .version("1.0.0");

program
    .command("user")
    .description("Show GitHub user information")
    .argument("<username>", "Github username")
    .action(async username => {
        try {
            const user = await getUser(username);
            printUser(user);
        } catch (error) {
            console.error(`Error: ${error.massage}`);
            process.exitCode = 1;
        }
    });
program
    .command("repos")
    .description("List public repositories")
    .argument("<username>", "Github username")
    .action(async username => {
        try {
            const repos = await getRepos(username);
            printRepos(repos);
        } catch (error) {
            console.error(`Error: ${error.massage}`);
            process.exitCode = 1;
        }
    });

program.parseAsync();
