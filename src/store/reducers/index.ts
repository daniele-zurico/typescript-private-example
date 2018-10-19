import { combineReducers } from 'redux';
import adminReducer from './admin';
import authReducer from './auth';
import categoryReducer from './categories';
import expensesReducer from './expenses';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  admin: adminReducer,
  expenses: expensesReducer,
});
