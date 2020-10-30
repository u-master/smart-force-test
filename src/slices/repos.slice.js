import { createSlice } from '@reduxjs/toolkit';

import { setUsername } from './username.slice';

const { reducer, actions } = createSlice({
  name: 'repos',
  initialState: {
    data: [],
    fetchingState: null,
    fetchingError: null,
  },
  reducers: {
    reposFetching: ({ fetchingState }) => {
      fetchingState = 'fetching';
    },
    reposFetched: ({ fetchingState, data }, { payload: { repos } }) => {
      data = repos;
      fetchingState = 'success';
    },
    reposFetchingError: ({ fetchingState }, { payload: { error } }) => {
      fetchingState = 'failed';
      fetchingError = error;
    },
  },
  extraReducers: {
    [setUsername](state, { payload: { username } }) {
      return;
    },
  },
});

export default reducer;
