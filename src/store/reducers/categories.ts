import * as actionTypes from '../actions/actionTypes';
const initialState = {
  error: {
    message: '',
    code: null,
  },
  categories: [],
  loading: false,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY_START:
      return { ...state, error: null, loading: true };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return { ...state, error: null, loading: false };
    case actionTypes.CREATE_CATEGORY_FAIL:
      const { message, code } = action.error;
      return { ...state, error: { message, code }, loading: false };
    case actionTypes.LOAD_CATEGORIES_START:
      return { ...state, error: null, loading: true };
    case actionTypes.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        error: null,
        loading: false,
      };
    case actionTypes.LOAD_CATEGORIES_FAIL:
      return { ...state, error: { message, code }, loading: false };

    default:
      return state;
  }
};

export default reducer;
