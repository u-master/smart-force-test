import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getReposPath, getReposAuthorizedUserPath } from '../routes';

const fetchRepos = createAsyncThunk('user/fetchRepos', ({ username, accessToken }) => {
  if (accessToken)
    return axios
      .get(getReposAuthorizedUserPath().href, {
        headers: { Authorization: `token ${accessToken}` },
      })
      .then(({ data }) => data);
  if (username === '') return Promise.resolve([]);
  return axios.get(getReposPath(username).href).then(({ data }) => data);
});

const {
  reducer,
  actions: { setFilter },
} = createSlice({
  name: 'repos',
  initialState: {
    data: [],
    filter: '',
    fetchingState: null,
    fetchingError: null,
  },
  reducers: {
    setFilter: (state, { payload: { filter } }) => {
      state.filter = filter.trim();
    },
  },
  extraReducers: {
    [fetchRepos.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.fetchingError = null;
      state.fetchingState = 'success';
      console.log(' >>> fetchRepos.fulfilled ', payload);
    },
    [fetchRepos.pending]: (state) => {
      state.data = [];
      state.fetchingState = 'fetching';
      console.log(' >>> fetchRepos.pending ');
    },
    [fetchRepos.rejected]: (state, { error }) => {
      state.fetchingState = 'failed';
      state.fetchingError = error;
      console.log(' >>> fetchRepos.rejected ', error);
    },
  },
});

export { fetchRepos, setFilter };
export default reducer;
