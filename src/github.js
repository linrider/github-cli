const API_URL = "https://api.github.com";

async function request(path) {
    const response = await fetch(`${API_URL}${path}`);

    if (!response.ok) {
        throw new Error(`GitHub returned ${response.status}`);
    }

    return response.json();
}

export async function getUser(username) {
   return request(`/users/${username}`);
}

export async function getRepos(username) {
    return request(`/users/${username}/repos`);
    
}