import { combineReducers } from 'redux';
import adminReducer from './admin';
import authReducer from './auth';
import categoryReducer from './categories';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  admin: adminReducer,
});
