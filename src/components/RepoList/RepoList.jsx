import React, { useEffect } from 'react';
import axios from 'axios';

import { getReposPath } from '../../routes';

const RepoList = () => {
  useEffect(() => {
    const repos = axios.get(getReposPath('anybody')).then((reposList) => console.log(reposList));
  }, []);

  return <p>List at console</p>;
};

export default RepoList;
