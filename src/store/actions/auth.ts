import { IError, IUser } from 'common/interfaces';
import * as actionTypes from './actionTypes';

export const login = (
  email: string,
  password: string,
  isRegister: boolean
) => ({
  type: actionTypes.LOGIN_START,
  email,
  password,
  isRegister,
});

export const loginSuccess = (response: IUser) => ({
  type: actionTypes.LOGIN_SUCCESS,
  response,
});

export const loginError = (error: IError) => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

export const dismissError = () => ({
  type: actionTypes.DISMISS_ERROR,
});
