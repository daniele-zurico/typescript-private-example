import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actionTypes from '../actions/actionTypes';
import { loginError, loginSuccess } from '../actions/auth';

export const fetchUserEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.LOGIN_START),
    mergeMap((action: any) =>
      ajax
        .post(
          `${environment.firebase.googleUrl}verifyPassword?key=${
            environment.firebase.apiKey
          }`,
          { email: action.email, password: action.password }
        )
        .pipe(
          map((response: any) => loginSuccess(response)),
          catchError((err: any) => of(loginError(err.response.error)))
        )
    )
  );
