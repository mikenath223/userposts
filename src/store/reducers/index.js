import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  usersByPosts: usersReducer,
});

export default rootReducer;
