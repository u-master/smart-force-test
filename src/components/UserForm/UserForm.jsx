import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthorizePath } from '../../routes';

import { setUsername, fetchUsername } from '../../slices/user.slice';
import {
  reposIsFetchingSelector,
  userAccessTokenSelector,
  usernameSelector,
  userIsLoggedInSelector,
} from '../../selectors';

import ContainerUserName from './ContainerUserName';
import FormUserName from './FormUserName';
import InputUserName from './InputUserName';
import Button, { success, danger } from '../Button';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formUsername, setFormUsername] = useState('');
  const isFetching = useSelector(reposIsFetchingSelector);
  const accessToken = useSelector(userAccessTokenSelector);
  const isLoggedIn = useSelector(userIsLoggedInSelector);
  const username = useSelector(usernameSelector);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUsername({ accessToken }));
    }
  }, []);

  useEffect(() => {
    setFormUsername(username);
  }, [username]);

  const handlerChange = (e) => {
    setFormUsername(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername({ username: formUsername }));
  };

  const handlerLogout = (e) => {
    e.preventDefault();
    window.location.href = window.location.origin;
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
          disabled={isFetching || isLoggedIn}
        />
      </FormUserName>
      <p> or </p>
      {isLoggedIn ? (
        <Button theme={danger} onClick={handlerLogout}>
          Logout
        </Button>
      ) : (
        <Button theme={success} onClick={handlerLogin}>
          Login with GitHub
        </Button>
      )}
    </ContainerUserName>
  );
};

export default SearchForm;
