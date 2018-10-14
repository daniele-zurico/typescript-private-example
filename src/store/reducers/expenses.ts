import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expenses: [],
  error: {
    message: '',
    code: null,
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_EXPENSES_START:
      return { ...state, error: null };
    case actionTypes.LOAD_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.expenses,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
