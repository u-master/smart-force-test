import { combineReducers } from 'redux';

import user from './slices/user.slice';
import repos from './slices/repos.slice';
import pagination from './slices/pagination.slice';

export default combineReducers({
  user,
  repos,
  pagination,
});
