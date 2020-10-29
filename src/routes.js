const gitHost = 'https://api.github.com';

const getReposPath = (username) => new URL(`/users/${username}/repos`, gitHost);

export { getReposPath };
