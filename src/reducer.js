import { combineReducers } from 'redux';

import username from './slices/username.slice';
import repos from './slices/repos.slice';

export default combineReducers({
  username,
  repos,
});
