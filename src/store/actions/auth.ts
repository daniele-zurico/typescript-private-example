import * as actionTypes from './actionTypes';

export const login = (mail: string, password: string) => ({
    type: actionTypes.LOGIN_START,
    mail,
    password
});

export const loginSuccess = (response: any) => ({
    type: actionTypes.LOGIN_SUCCESS,
    response
});