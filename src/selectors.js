import { createSelector } from 'reselect';

const usernameSelector = ({ username }) => username;

const allReposSelector = ({ repos: { data } }) => data;

const reposIsFetchingSelector = ({ repos: { fetchingState } }) => fetchingState === 'fetching';

const reposIsFetchErrorSelector = ({ repos: { fetchingState } }) => fetchingState === 'failed';

const reposFetchingErrorSelector = ({ repos: { fetchingError } }) => fetchingError?.message;

export {
  usernameSelector,
  allReposSelector,
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposFetchingErrorSelector,
};
