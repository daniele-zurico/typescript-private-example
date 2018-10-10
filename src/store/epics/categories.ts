import { environment } from 'environments/environment.test';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  createCategoryFail,
  createCategorySuccess,
  loadCategoriesFail,
  loadCategoriesSuccess,
} from '../actions';
import * as actionTypes from '../actions/actionTypes';
export const createCategoryEpic = (action$: any) =>
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
          map((res: any) => createCategorySuccess()),
          catchError((err: any) =>
            of(
              createCategoryFail({
                code: err.status,
                message: err.response.error,
              })
            )
          )
        )
    )
  );

export const loadCategoriesEpic = (action$: any) =>
  action$.pipe(
    ofType(actionTypes.LOAD_CATEGORIES_START),
    mergeMap((action: any) =>
      ajax
        .get(
          `${environment.firebase.databaseURL}/user/${
            action.id
          }/categories.json`
        )
        .pipe(
          map((res: any) => {
            const categories = [];
            for (const cat in res.response) {
              categories.push({
                ...res.response[cat],
                id: cat,
              });
            }
            return loadCategoriesSuccess(categories);
          }),
          catchError((err: any) =>
            of(
              loadCategoriesFail({
                code: err.status,
                message: err.response.error,
              })
            )
          )
        )
    )
  );
