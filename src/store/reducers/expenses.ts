import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expenses: [],
  error: {
    message: '',
    code: null,
  },
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_EXPENSES_START:
      return { ...state, error: null, loading: true };
    case actionTypes.LOAD_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.expenses,
        error: null,
        loading: false,
      };
    case actionTypes.LOAD_EXPENSES_FAIL:
      const { message, code } = action;
      return {
        ...state,
        expenses: [],
        error: {
          message,
          code,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
