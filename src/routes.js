const gitHost = 'https://api.github.com';

const getReposPath = (username) => new URL(`/users/${username}/repos`, gitHost);

const getAuthorizePath = (client_id) =>
  `https://github.com/login/oauth/authorize?client_id=${client_id}`;

export { getReposPath, getAuthorizePath };
