import React from 'react';
import {useDispatch} from 'react-redux';

import {setUsername} from '../../slices/username.slice';
import {fetchRepos} from '../../slices/repos.slice';


const SearchForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername);
  }

  return (
    <form>
      <input type="text" name="username" id="username" placeholder="User name"></input>
    </form>
  );
};

export default SearchForm;
