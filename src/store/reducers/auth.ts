import * as actionTypes from '../actions/actionTypes';

const initialState = {
  displayName: '',
  email: '',
  idToken: '',
  kind: '',
  localId: '',
  registered: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      const { displayName, email, idToken, kind, localId, registered } = action;
      return {
        ...state,
        displayName,
        email,
        idToken,
        kind,
        localId,
        registered,
        error: null,
        loading: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        displayName: '',
        email: '',
        idToken: '',
        kind: '',
        localId: '',
        registered: false,
        error: action.error,
        loading: false,
      };
    case actionTypes.DISMISS_ERROR:
      return {
        ...state,
        displayName: '',
        email: '',
        idToken: '',
        kind: '',
        localId: '',
        registered: false,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
