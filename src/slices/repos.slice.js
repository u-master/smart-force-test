import { createSlice } from '@reduxjs/toolkit';

import { setUsername } from './username.slice';

const { reducer } = createSlice({
  name: 'repos',
  initialState: [],
  extraReducers: {
    [setUsername](state) {
      return;
    },
  },
});

export default reducer;
