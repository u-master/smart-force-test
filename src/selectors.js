import { createSelector } from 'reselect';

const usernameSelector = ({ username }) => username;

const allReposSelector = ({ repos: { data } }) => data;

const reposIsFetchingSelector = ({ repos: { fetchingState } }) => fetchingState === 'fetching';

const reposIsFetchErrorSelector = ({ repos: { fetchingState } }) => fetchingState === 'failed';

const reposIsFetchEmptySelector = ({ repos: { fetchingState, data } }) =>
  fetchingState === 'success' && data.length === 0;

const reposFetchingErrorSelector = ({ repos: { fetchingError } }) => fetchingError?.message;

const reposCurrentPageSelector = ({ repos: })

export {
  usernameSelector,
  allReposSelector,
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposIsFetchEmptySelector,
  reposFetchingErrorSelector,
  reposCurrentPageSelector, 
};
