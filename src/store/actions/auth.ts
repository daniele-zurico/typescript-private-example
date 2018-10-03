import { IError, IUser } from 'common/interfaces';
import * as actionTypes from './actionTypes';

export const authStart = (
  email: string,
  password: string,
  isRegister: boolean
) => ({
  type: actionTypes.AUTH_START,
  email,
  password,
  isRegister,
});

export const authSuccess = (response: IUser) => ({
  type: actionTypes.AUTH_SUCCESS,
  response,
});

export const authError = (error: IError) => ({
  type: actionTypes.AUTH_ERROR,
  error,
});

export const dismissError = () => ({
  type: actionTypes.DISMISS_ERROR,
});
