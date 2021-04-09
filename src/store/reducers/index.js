import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  usersData: usersReducer,
  postsData: postsReducer
});

export default rootReducer;
