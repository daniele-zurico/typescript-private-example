import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { createCategoryFail, createCategorySuccess } from '../actions';
import * as actionTypes from '../actions/actionTypes';
export const categoryEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.CREATE_CATEGORY_START),
    mergeMap((action: any) =>
      ajax
        .post(
          `${environment.firebase.databaseURL}/user/${
            action.id
          }/categories.json`,
          JSON.stringify({
            category: action.category,
            tag: action.tagId,
          })
        )
        .pipe(
          map((res: any) => {
            return createCategorySuccess();
          }),
          catchError((err: any) => {
            return of(
              createCategoryFail({
                code: err.status,
                message: err.response.error,
              })
            );
          })
        )
    )
  );
