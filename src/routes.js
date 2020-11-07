const gitHost = 'https://api.github.com';

const getReposPath = (username) => new URL(`/users/${username}/repos`, gitHost);

const getAuthorizePath = () =>
  'https://github.com/login/oauth/authorize?client_id=bd4f45a8fde0385a77a4';

export { getReposPath, getAuthorizePath };
