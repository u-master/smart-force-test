import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usernameSelector, pageReposSelector, reposIsFetchEmptySelector } from '../../selectors';
import { fetchRepos } from '../../slices/repos.slice';

import RepoItem from './RepoItem';
import RepoList from './RepoList';
import RepoFilter from './RepoFilter';
import Paginator from '../Paginator';

const Repos = () => {
  const username = useSelector(usernameSelector);
  const pageRepos = useSelector(pageReposSelector);
  const isEmpty = useSelector(reposIsFetchEmptySelector);
  const dispatch = useDispatch();
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
