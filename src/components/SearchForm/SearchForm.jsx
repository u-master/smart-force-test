import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUsername } from '../../slices/username.slice';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formUsername, setFormUsername] = useState('');

  const onChange = (e) => {
    setFormUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername({ username: formUsername }));
    console.log(' >>> onSubmit ');
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="User name"
        onChange={onChange}
        value={formUsername}
      ></input>
    </form>
  );
};

export default SearchForm;
