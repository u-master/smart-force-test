import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getUserAuthorizedUserPath } from '../routes';

const fetchUsername = createAsyncThunk('user/fetchUsername', ({ accessToken }) => {
  if (accessToken)
    return axios
      .get(getUserAuthorizedUserPath().href, {
        headers: { Authorization: `token ${accessToken}` },
      })
      .then(({ data: { name } }) => ({ name }));
  return Promise.resolve([]);
});

const {
  reducer,
  actions: { setUsername },
} = createSlice({
  name: 'user',
  initialState: {
    name: '',
    access_token: null,
    fetchingError: null,
    fetchingState: null,
  },
  reducers: {
    setUsername(state, { payload: { username } }) {
      state.name = username;
    },
  },
  extraReducers: {
    [fetchUsername.fulfilled]: (state, { payload: { name } }) => {
      state.name = name;
      state.fetchingError = null;
      state.fetchingState = 'success';
      console.log(' >>> fetchUsername.fulfilled ', name);
    },
    [fetchUsername.pending]: (state) => {
      state.name = '';
      state.fetchingState = 'fetching';
      console.log(' >>> fetchUsername.pending ');
    },
    [fetchUsername.rejected]: (state, { error }) => {
      state.fetchingState = 'failed';
      state.fetchingError = error;
      console.log(' >>> fetchUsername.rejected ', error);
    },
  },
});

export { fetchUsername, setUsername };
export default reducer;
