import * as actionTypes from '../actions/actionTypes';
const initialState = {
  error: {
    message: '',
    code: null,
  },
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY_START:
      return state;
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return state;
    case actionTypes.CREATE_CATEGORY_FAIL:
      debugger;
      const { message, code } = action.error;
      return { state, error: { message, code } };
    default:
      return state;
  }
};

export default reducer;
