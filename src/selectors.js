import { createSelector } from 'reselect';

const usernameSelector = ({ user: { name } }) => name;

const userAccessTokenSelector = ({ user: { accessToken } }) => accessToken;

const allReposSelector = ({ repos: { data } }) => data;

const reposIsFetchingSelector = ({ repos: { fetchingState } }) => fetchingState === 'fetching';

const reposIsFetchErrorSelector = ({ repos: { fetchingState } }) => fetchingState === 'failed';

const reposIsFetchEmptySelector = ({ repos: { fetchingState, data } }) =>
  fetchingState === 'success' && data.length === 0;

const reposFetchingErrorSelector = ({ repos: { fetchingError } }) => fetchingError?.message;

const reposFilterSelector = ({ repos: { filter } }) => filter;

const filteredReposSelector = createSelector(
  allReposSelector,
  reposFilterSelector,
  (repos, filter) =>
    filter === ''
      ? repos
      : repos.filter((repo) => repo.name.includes(filter) || repo?.description?.includes(filter)),
);

const paginationCurrentPageSelector = ({ pagination: { currentPage } }) => currentPage;

const paginationItemsPerPageSelector = ({ pagination: { itemsPerPage } }) => itemsPerPage;

const paginationLastPageSelector = createSelector(
  filteredReposSelector,
  paginationItemsPerPageSelector,
  (repos, perPage) => Math.max(1, Math.ceil(repos.length / perPage)),
);

const paginationIsShowAllSelector = ({ pagination: { isShowAll } }) => isShowAll;

const pageReposSelector = createSelector(
  filteredReposSelector,
  paginationCurrentPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
  (repos, curPage, perPage, isShowAll) =>
    isShowAll ? repos : repos.slice((curPage - 1) * perPage, curPage * perPage),
);

export {
  usernameSelector,
  userAccessTokenSelector,
  allReposSelector,
  filteredReposSelector,
  pageReposSelector,
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposIsFetchEmptySelector,
  reposFetchingErrorSelector,
  reposFilterSelector,
  paginationCurrentPageSelector,
  paginationLastPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
};
