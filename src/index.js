const username = process.argv[2];

if (!username) {
    console.error("Usage: node github-cli.js <username>");
    process.exit(1);
}

async function getUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        console.log(`GitHub returned ${response.status}`);
        return;
    }

    const user = await response.json();
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

async function getRepos(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
        console.log(`GitHub returned ${response.status}`);
        return;
    }
    const repos = await response.json();
    const repoNames = repos.map(repo => repo.name);
    console.log(repoNames);
}

getUser(username);
getRepos(username);
