import { combineEpics } from 'redux-observable';
import { authUserEpic } from './auth';
import { categoryEpic } from './categories';

export default combineEpics(authUserEpic, categoryEpic);
