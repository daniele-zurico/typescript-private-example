import { combineEpics } from 'redux-observable';
import { addIncomeEpic, loadIncomeEpic } from 'store/epics/admin';
import { authUserEpic } from './auth';
import { createCategoryEpic, loadCategoriesEpic } from './categories';

export default combineEpics(
  authUserEpic,
  createCategoryEpic,
  loadCategoriesEpic,
  addIncomeEpic,
  loadIncomeEpic
);
