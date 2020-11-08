import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'user',
  initialState: {
    name: '',
    access_token: null,
  },
  reducers: {
    setUsername(state, { payload: { username } }) {
      state.name = username;
    },
  },
});

export const { setUsername } = actions;
export default reducer;
