import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from 'store/epics/auth';

export default combineEpics(
  fetchUserEpic
);

