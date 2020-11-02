import { createSlice } from '@reduxjs/toolkit';

import {fetchRepos} from './repos.slice';

const { reducer, action } = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    lastPage: 1,
    itemsPerPage: Infinity,
  },
  reducers: {
    setCurrentPage: (state, { payload: { page } }) => {
      state.currentPage = page;
    }
  },
  extraReducers: {
    [fetchRepos.fulfilled]: (state, { payload }) => {
      state.currentPage = 1;
      state.lastPage = Math.max(1, Math.ceil(payload.length / state.itemsPerPage));
    }
  },
});
