import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUsername } from '../../slices/username.slice';
import { reposIsFetchingSelector } from '../../selectors';

import InputUserName from './InputUserName';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formUsername, setFormUsername] = useState('');
  const isFetching = useSelector(reposIsFetchingSelector);

  const onChange = (e) => {
    setFormUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername({ username: formUsername }));
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <InputUserName
        type="text"
        name="username"
        id="username"
        placeholder="User name"
        onChange={onChange}
        value={formUsername}
        disabled={isFetching}
      />
    </form>
  );
};

export default SearchForm;
