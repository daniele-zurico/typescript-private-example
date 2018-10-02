import { IHttpErrorResponse, IUser } from 'common/interfaces';
import * as actionTypes from './actionTypes';

export const login = (email: string, password: string) => ({
  type: actionTypes.LOGIN_START,
  email,
  password,
});

export const loginSuccess = (response: IUser) => ({
  type: actionTypes.LOGIN_SUCCESS,
  response,
});

export const loginError = (error: IHttpErrorResponse) => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});
