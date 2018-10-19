import { IError } from 'common/interfaces';
import * as actionTypes from './actionTypes';

export const createCategoryStart = (
  id: string,
  category: string,
  tagId: number
) => ({
  type: actionTypes.CREATE_CATEGORY_START,
  id,
  category,
  tagId,
});

export const createCategorySuccess = () => ({
  type: actionTypes.LOAD_CATEGORIES_START,
});

export const createCategoryFail = (error: IError) => ({
  type: actionTypes.CREATE_CATEGORY_FAIL,
  error,
});

export const loadCategoriesStart = () => ({
  type: actionTypes.LOAD_CATEGORIES_START,
});

export const loadCategoriesSuccess = (categories: any) => ({
  type: actionTypes.LOAD_CATEGORIES_SUCCESS,
  categories,
});

export const loadCategoriesFail = (error: IError) => ({
  type: actionTypes.LOAD_CATEGORIES_FAIL,
  error,
});
