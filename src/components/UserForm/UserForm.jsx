import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getAuthorizePath, getUserAuthorizedUserPath } from '../../routes';

import { setUsername, fetchUsername } from '../../slices/user.slice';
import { reposIsFetchingSelector, userAccessTokenSelector } from '../../selectors';

import ContainerUserName from './ContainerUserName';
import FormUserName from './FormUserName';
import InputUserName from './InputUserName';
import ButtonUserLogin from './ButtonUserLogin';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formUsername, setFormUsername] = useState('');
  const isFetching = useSelector(reposIsFetchingSelector);
  const accessToken = useSelector(userAccessTokenSelector);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUsername({ accessToken }));
    }
  }, []);

  const handlerChange = (e) => {
    setFormUsername(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername({ username: formUsername }));
  };

  const handlerLogin = (e) => {
    // FIXIT
    const client_id =
      process.env.NODE_ENV === 'development' ? 'bd4f45a8fde0385a77a4' : '4421486ad44ad061fbed';
    window.location.href = getAuthorizePath(client_id);
  };

  return (
    <ContainerUserName>
      <FormUserName method="post" onSubmit={handlerSubmit}>
        <InputUserName
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          onChange={handlerChange}
          value={formUsername}
          disabled={isFetching}
        />
      </FormUserName>
      <p> or </p>
      <ButtonUserLogin onClick={handlerLogin}>Login with GitHub</ButtonUserLogin>
    </ContainerUserName>
  );
};

export default SearchForm;
