const gitHost = 'https://api.github.com';

const getReposPath = (username, access_token = null) =>
  new URL(
    `/users/${username}/repos${access_token ? `?access_token=${access_token}` : ''}`,
    gitHost,
  );

const getAuthorizePath = (client_id) =>
  `https://github.com/login/oauth/authorize?client_id=${client_id}`;

export { getReposPath, getAuthorizePath };
