import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getReposPath } from '../routes';

const fetchRepos = createAsyncThunk('username/fetchRepos', ({ username }) => {
  if (username === '') return Promise.resolve([]);
  return axios.get(getReposPath(username).href).then(({ data }) => data);
});

const { reducer, actions } = createSlice({
  name: 'repos',
  initialState: {
    data: [],
    fetchingState: null,
    fetchingError: null,
  },
  extraReducers: {
    [fetchRepos.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.fetchingState = 'success';
      console.log(' >>> fetchRepos.fulfilled ', payload);
    },
    [fetchRepos.pending]: (state) => {
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

export { fetchRepos };
export default reducer;
