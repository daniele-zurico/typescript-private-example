import * as actionTypes from '../actions/actionTypes';

const initialState = {
  displayName: '',
  email: '',
  idToken: '',
  kind: '',
  localId: '',
  registered: false,
  loading: false,
  error: {
    message: '',
    code: null,
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      const {
        displayName,
        email,
        idToken,
        kind,
        localId,
        registered,
      } = action.response;
      return {
        ...state,
        displayName,
        email,
        idToken,
        kind,
        localId,
        registered,
        error: {
          ...state.error,
          code: null,
        },
        loading: false,
      };
    case actionTypes.LOGIN_ERROR:
      const { message, code } = action.error;
      return {
        ...state,
        displayName: '',
        email: '',
        idToken: '',
        kind: '',
        localId: '',
        registered: false,
        error: {
          ...action.error,
          message,
          code,
        },
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
        error: {
          ...state.error,
          code: null,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
