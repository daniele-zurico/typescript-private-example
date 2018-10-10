import { combineEpics } from 'redux-observable';
import { authUserEpic } from './auth';
import { createCategoryEpic, loadCategoriesEpic } from './categories';

export default combineEpics(
  authUserEpic,
  createCategoryEpic,
  loadCategoriesEpic
);
