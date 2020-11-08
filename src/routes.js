const gitHost = 'https://api.github.com';

const getReposPath = (username) => new URL(`/users/${username}/repos`, gitHost);

const getReposAuthorizedUserPath = () => new URL(`/user/repos?visibility=all`, gitHost);

const getUserAuthorizedUserPath = () => new URL(`/user`, gitHost);

// `/users/${username}/repos${access_token ? `&access_token=${access_token}` : ''}`,

const getAuthorizePath = (client_id) =>
  `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo`;

export { getReposPath, getReposAuthorizedUserPath, getUserAuthorizedUserPath, getAuthorizePath };
