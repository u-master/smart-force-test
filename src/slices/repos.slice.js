import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {getReposPath} from '../routes';
import { setUsername } from './username.slice';

// const fetchRepos = () => (dispatch) => {
  
// };

const fetchRepos  = createAsyncThunk(
  'username/fetchRepos',
  async (username) => await axios.get(getReposPath(username)));



const { reducer, actions } = createSlice({
  name: 'repos',
  initialState: {
    data: [],
    fetchingState: null,
    fetchingError: null,
  },
  // reducers: {
  //   reposFetching: ({ fetchingState }) => {
  //     fetchingState = 'fetching';
  //   },
  //   reposFetched: ({ fetchingState, data }, { payload: { repos } }) => {
  //     data = repos;
  //     fetchingState = 'success';
  //   },
  //   reposFetchingError: ({ fetchingState }, { payload: { error } }) => {
  //     fetchingState = 'failed';
  //     fetchingError = error;
  //   },
  // },
  extraRedusers: {
    [fetchRepos.fulfilled]: ({fetchingState, data}, {payload }) => {
      data = payload;
      fetchingState = 'success';
      console.log(payload);
    },
    [fetchRepos.pending]: ({fetchingState}) => {
      fetchingState = 'fetching';
    },
    [fetchRepos.rejected]: ({fetchingState, fetchingError}, {payload}) => {
      fetchingState = 'failed';
      fetchingError = payload;
      console.log(payload);
    }
  },
});

export {fetchRepos};
export default reducer;
