import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import {
  createExpensesFail,
  createExpensesSuccess,
  loadExpensesFail,
  loadExpensesSuccess,
} from 'store/actions';
import { getUserId } from 'store/selectors';
import * as actionTypes from '../actions/actionTypes';

export const createExpensesEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(actionTypes.CREATE_EXPENSES_START),
    withLatestFrom(state$.pipe(map(getUserId))),
    mergeMap(([action, userId]) =>
      ajax
        .post(
          `${environment.firebase.databaseURL}/user/${userId}/expenses.json`,
          JSON.stringify({
            name: action.name,
            amount: action.amount,
            date: action.date,
            category: action.category,
          })
        )
        .pipe(
          map((res: any) => createExpensesSuccess()),
          catchError((err: any) =>
            of(
              createExpensesFail({
                code: err.status,
                message: err.response.error,
              })
            )
          )
        )
    )
  );

export const loadExpensesEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(actionTypes.LOAD_EXPENSES_START),
    withLatestFrom(state$.pipe(map(getUserId))),
    mergeMap(([, userId]) =>
      ajax
        .get(`${environment.firebase.databaseURL}/user/${userId}/expenses.json`)
        .pipe(
          map((res: any) => {
            // create another selector and remove the logic from here
            const expenses = [];
            for (const expense in res.response) {
              expenses.push({
                ...res.response[expense],
                id: expense,
              });
            }
            //
            return loadExpensesSuccess(expenses);
          }),
          catchError((err: any) =>
            of(
              loadExpensesFail({
                code: err.status,
                message: err.response.error,
              })
            )
          )
        )
    )
  );
