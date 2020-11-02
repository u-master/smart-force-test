import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'username',
  initialState: '',
  reducers: {
    setUsername(state, { payload: { username } }) {
      return username;
    },
  },
});

export const { setUsername } = actions;
export default reducer;
