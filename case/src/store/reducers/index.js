import { combineReducers } from 'redux';
import search from './searchReducer';

const getReducers = combineReducers({
  search,
});

export default getReducers;
