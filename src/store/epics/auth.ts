import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actionTypes from '../actions/actionTypes';
import { authError, authSuccess } from '../actions/auth';

export const authUserEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.AUTH_START),
    mergeMap((action: any) =>
      ajax
        .post(
          `${environment.firebase.googleUrl}${
          action.isRegister ? 'signupNewUser' : 'verifyPassword'
          }?key=${environment.firebase.apiKey}`,
          {
            email: action.email,
            password: action.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((res: any) => {
            try {
              const expirationDate = new Date(
                new Date().getTime() + res.response.expiresIn * 1000
              );
              localStorage.setItem('token', res.response.idToken);
              localStorage.setItem('expirationDate', expirationDate.toString());
              localStorage.setItem('userId', res.response.localId);
              localStorage.setItem('email', res.response.email);
              return authSuccess(res.response);
            } catch (err) {
              return of(
                authError({
                  code: 500,
                  message: 'unable to save your data',
                })
              );
            }
          }),
          catchError((err: any) => of(authError(err.response.error)))
        )
    )
  );