import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  createExpensesFail,
  createExpensesSuccess,
  loadExpensesFail,
  loadExpensesSuccess,
} from 'store/actions';
import * as actionTypes from '../actions/actionTypes';

export const createExpensesEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.CREATE_EXPENSES_START),
    mergeMap((action: any) =>
      ajax
        .post(
          `${environment.firebase.databaseURL}/user/${action.id}/expenses.json`,
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

export const loadExpensesEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.LOAD_EXPENSES_START),
    mergeMap((action: any) =>
      ajax
        .get(
          `${environment.firebase.databaseURL}/user/${action.id}/expenses.json`
        )
        .pipe(
          map((res: any) => {
            const expenses = [];
            for (const expense in res.response) {
              expenses.push({
                ...res.response[expense],
                id: expense,
              });
            }
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
