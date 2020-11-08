import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  usernameSelector,
  userAccessTokenSelector,
  pageReposSelector,
  reposIsFetchEmptySelector,
} from '../../selectors';
import { fetchRepos } from '../../slices/repos.slice';

import RepoItem from './RepoItem';
import RepoList from './RepoList';
import RepoFilter from './RepoFilter';
import Paginator from '../Paginator';

const Repos = () => {
  const username = useSelector(usernameSelector);
  const accessToken = useSelector(userAccessTokenSelector);
  const pageRepos = useSelector(pageReposSelector);
  const isEmpty = useSelector(reposIsFetchEmptySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) dispatch(fetchRepos({ accessToken }));
  }, []);
  useEffect(() => {
    dispatch(fetchRepos({ username }));
  }, [username]);

  return (
    <>
      {isEmpty ? null : <RepoFilter />}
      {pageRepos.length === 0 ? null : (
        <>
          <RepoList>
            {pageRepos.map((item) => (
              <RepoItem key={item.id} item={item} />
            ))}
          </RepoList>
          <Paginator />
        </>
      )}
    </>
  );
};

export default Repos;
