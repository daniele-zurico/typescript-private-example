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
  type: actionTypes.CREATE_CATEGORY_SUCCESS,
});

export const createCategoryFail = (error: IError) => ({
  type: actionTypes.CREATE_CATEGORY_FAIL,
  error,
});
