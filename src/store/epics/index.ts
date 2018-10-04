import { combineEpics } from 'redux-observable';
import { authUserEpic } from 'store/epics/auth';

export default combineEpics(
    authUserEpic
);
