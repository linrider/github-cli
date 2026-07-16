export function printUser(user) {
    const {
        login,
        name,
        public_repos,
        followers,
        following
    } = user;
    console.log(`Login: ${login}`);
    console.log(`Name: ${name}`);
    console.log(`Repositories: ${public_repos}`);
    console.log(`Followers: ${followers}`);
    console.log(`Following: ${following}`);
}

export function printRepos(repos) {
    console.log("\nRepository names:");

    for (const repo of repos) {
        console.log(`- ${repo.name}`)
    }
}