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

export const logout = () => ({
    type: actionTypes.AUTH_LOGOUT,
});

export const authAutoSignIn = () => {
    try {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const userId = localStorage.getItem('userId');
        if (token) {
            return authSuccess({
                displayName: '',
                email: email || '',
                idToken: token || '',
                kind: '',
                localId: userId || "",
                registered: true
            });
        } else {
            return logout();
        }
    } catch {
        return logout();
    }
}

export const dismissError = () => ({
    type: actionTypes.DISMISS_ERROR,
});
