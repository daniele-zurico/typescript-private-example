import { IError } from 'common/interfaces';
import * as actionTypes from './actionTypes';

export const createExpensesStart = (
  id: string,
  name: string,
  amount: string,
  date: string,
  category: string
) => ({
  type: actionTypes.CREATE_EXPENSES_START,
  id,
  name,
  amount,
  date,
  category,
});

export const createExpensesSuccess = () => ({
  type: actionTypes.LOAD_EXPENSES_START,
});

export const createExpensesFail = (error: IError) => ({
  type: actionTypes.CREATE_EXPENSES_FAIL,
  error,
});

export const loadExpensesStart = (id: string) => ({
  type: actionTypes.LOAD_EXPENSES_START,
  id,
});

export const loadExpensesSuccess = (expenses: any[]) => ({
  type: actionTypes.LOAD_EXPENSES_SUCCESS,
  expenses,
});

export const loadExpensesFail = (error: IError) => ({
  type: actionTypes.LOAD_EXPENSES_FAIL,
  error,
});
