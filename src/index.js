import { getUser, getRepos } from "./github.js";
import { printRepos, printUser } from "./outpuit.js";
const username = process.argv[2];

if (!username) {
    console.error("Usage: node github-cli.js <username>");
    process.exit(1);
}

async function main() {
    try {
        const user = await getUser(username);
        const repos = await getRepos(username);
        
        printUser(user);
        printRepos(repos);
    } catch (error) {
        console.error(error.massage);
        process.exit(1);
    }
}

main();
