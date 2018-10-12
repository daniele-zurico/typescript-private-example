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
    category
});

export const createExpensesSuccess = () => ({
    type: actionTypes.CREATE_EXPENSES_SUCCESS,
});

export const createExpensesFail = (error: IError) => ({
    type: actionTypes.CREATE_EXPENSES_FAIL,
    error,
});