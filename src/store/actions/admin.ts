import { IError } from "common/interfaces";
import * as actionTypes from './actionTypes';

export const createIncomeStart = (amount: string, date: string) => ({
    type: actionTypes.CREATE_INCOME_START,

    amount,
    date
});

export const createIncomeSuccess = (amount: string, date: string) => ({
    type: actionTypes.CREATE_INCOME_SUCCESS,
    amount,
    date
});

export const createIncomeFailed = (error: IError) => ({
    type: actionTypes.CREATE_INCOME_FAIL,
    error
});

export const loadIncomeStart = () => ({
    type: actionTypes.LOAD_INCOME_START,
});

export const loadIncomeSuccess = (income: string, date: string) => ({
    type: actionTypes.LOAD_INCOME_SUCCESS,
    income,
    date
});

export const loadIncomeFailed = (error: IError) => ({
    type: actionTypes.LOAD_INCOME_FAIL,
    error
});