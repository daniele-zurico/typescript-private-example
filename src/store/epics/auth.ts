import axios from 'common/util/axios-http-auth';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from '../actions/actionTypes';
import { loginSuccess } from '../actions/auth';
export const fetchUserEpic = (action$: any) => action$.pipe(
    ofType(actionTypes.LOGIN_START),
    mergeMap((action: any) =>
        axios.post('verifyPassword', { email: action.email, password: action.password })
            .then((res) => loginSuccess(res)))
);

