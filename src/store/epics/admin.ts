import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { createIncomeFailed, createIncomeSuccess, loadIncomeFailed, loadIncomeSuccess } from 'store/actions';
import * as actionTypes from '../actions/actionTypes';
export const addIncomeEpic = (action$: any) =>
    action$.pipe(
        ofType(actionTypes.CREATE_INCOME_START),
        mergeMap((action: any) =>
            ajax.put(
                `${environment.firebase.databaseURL}/user/${
                action.id
                }/income.json`,
                JSON.stringify({
                    amount: action.amount
                })
            ).pipe(
                map((res: any) => createIncomeSuccess()),
                catchError((err: any) => of(createIncomeFailed({ code: err.status, message: err.response.error, })))
            )
        )
    )

export const loadIncomeEpic = (action$: any) =>
    action$.pipe(
        ofType(actionTypes.LOAD_INCOME_START),
        mergeMap((action: any) =>
            ajax.get(
                `${environment.firebase.databaseURL}/user/${
                action.id
                }/income.json`
            ).pipe(
                map((res: any) => loadIncomeSuccess(res.response.amount)),
                catchError((err: any) => of(loadIncomeFailed({ code: err.status, message: err.response.error, })))
            )
        )
    )
