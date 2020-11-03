import { createSlice } from '@reduxjs/toolkit';

import { fetchRepos } from './repos.slice';

const calcLastPage = (len, perPage) => Math.max(1, Math.ceil(len / perPage));

const { reducer, actions } = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    lastPage: 1,
    itemsNum: 0,
    itemsPerPage: 6,
    isShowAll: true,
  },
  reducers: {
    setCurrentPage: (state, { payload: { currentPage } }) => {
      state.currentPage = currentPage;
    },
    setItemsPerPage: (state, { payload: { itemsPerPage } }) => {
      state.itemsPerPage = itemsPerPage;
      state.lastPage = calcLastPage(state.itemsNum, itemsPerPage);
    },
    setShowAll: (state, { payload: { isShowAll } }) => {
      state.isShowAll = isShowAll;
    },
  },
  extraReducers: {
    [fetchRepos.fulfilled]: (state, { payload }) => {
      state.currentPage = 1;
      state.itemsNum = payload.length;
      state.lastPage = calcLastPage(state.itemsNum, state.itemsPerPage);
    },
  },
});

export const { setCurrentPage, setItemsPerPage, setShowAll } = actions;
export default reducer;
