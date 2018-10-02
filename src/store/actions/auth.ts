import * as actionTypes from './actionTypes';

export const login = (email: string, password: string) => ({
    type: actionTypes.LOGIN_START,
    email,
    password
});

export const loginSuccess = (response: any) => ({
    type: actionTypes.LOGIN_SUCCESS,
    response
});

export const loginError = (error: any) => ({
    type: actionTypes.LOGIN_ERROR,
    error
});
