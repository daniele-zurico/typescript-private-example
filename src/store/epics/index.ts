import { combineEpics } from 'redux-observable';
import { addIncomeEpic, loadIncomeEpic } from './admin';
import { authUserEpic } from './auth';
import { createCategoryEpic, loadCategoriesEpic } from './categories';
import { createExpensesEpic } from './expenses';

export default combineEpics(
  authUserEpic,
  createCategoryEpic,
  loadCategoriesEpic,
  addIncomeEpic,
  loadIncomeEpic,
  createExpensesEpic
);
