import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usernameSelector, allReposSelector } from '../../selectors';
import { fetchRepos } from '../../slices/repos.slice';

import RepoItem from './RepoItem';
import RepoList from './RepoList';

const Repos = () => {
  const username = useSelector(usernameSelector);
  const allRepos = useSelector(allReposSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos({ username }));
  }, [username]);

  return allRepos.length === 0 ? (
    <p>Nothing!</p>
  ) : (
    <RepoList>
      {allRepos.map((item) => (
        <RepoItem key={item.id} item={item} />
      ))}
    </RepoList>
  );
};

export default Repos;