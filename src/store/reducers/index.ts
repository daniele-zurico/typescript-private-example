import { combineReducers } from 'redux';
import authReducer from './auth';
import categoryReducer from './categories';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
});
