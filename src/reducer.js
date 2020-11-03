import { combineReducers } from 'redux';

import username from './slices/username.slice';
import repos from './slices/repos.slice';
import pagination from './slices/pagination.slice';

export default combineReducers({
  username,
  repos,
  pagination,
});
