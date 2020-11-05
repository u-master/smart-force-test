import { createSlice } from '@reduxjs/toolkit';

import { fetchRepos, setFilter } from './repos.slice';

const { reducer, actions } = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    itemsNum: 0,
    itemsPerPage: 6,
    isShowAll: true,
  },
  reducers: {
    setCurrentPage: (state, { payload: { currentPage } }) => {
      state.currentPage = currentPage;
    },
    setItemsPerPage: (state, { payload: { itemsPerPage } }) => {
      state.currentPage = 1;
      state.itemsPerPage = itemsPerPage;
    },
    setShowAll: (state, { payload: { isShowAll } }) => {
      state.isShowAll = isShowAll;
    },
  },
  extraReducers: {
    [fetchRepos.fulfilled]: (state) => {
      state.currentPage = 1;
    },
    [setFilter]: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, setItemsPerPage, setShowAll } = actions;
export default reducer;
