import { createSelector } from 'reselect';

const usernameSelector = ({ username }) => username;

const allReposSelector = ({ repos: { data } }) => data;

const reposIsFetchingSelector = ({ repos: { fetchingState } }) => fetchingState === 'fetching';

const reposIsFetchErrorSelector = ({ repos: { fetchingState } }) => fetchingState === 'failed';

const reposIsFetchEmptySelector = ({ repos: { fetchingState, data } }) =>
  fetchingState === 'success' && data.length === 0;

const reposFetchingErrorSelector = ({ repos: { fetchingError } }) => fetchingError?.message;

const paginationCurrentPageSelector = ({ pagination: { currentPage } }) => currentPage;

const paginationItemsPerPageSelector = ({ pagination: { itemsPerPage } }) => itemsPerPage;

const paginationLastPageSelector = createSelector(
  allReposSelector,
  paginationItemsPerPageSelector,
  (repos, perPage) => Math.max(1, Math.ceil(repos.length / perPage)),
);

const paginationIsShowAllSelector = ({ pagination: { isShowAll } }) => isShowAll;

const pageReposSelector = createSelector(
  allReposSelector,
  paginationCurrentPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
  (repos, curPage, perPage, isShowAll) =>
    isShowAll ? repos : repos.slice((curPage - 1) * perPage, curPage * perPage),
);

export {
  usernameSelector,
  allReposSelector,
  pageReposSelector,
  reposIsFetchingSelector,
  reposIsFetchErrorSelector,
  reposIsFetchEmptySelector,
  reposFetchingErrorSelector,
  paginationCurrentPageSelector,
  paginationLastPageSelector,
  paginationItemsPerPageSelector,
  paginationIsShowAllSelector,
};
