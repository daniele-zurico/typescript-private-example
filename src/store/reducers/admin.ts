import * as actionTypes from '../actions/actionTypes';
const initialState = {
    error: null,
    income: ''
}
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CREATE_INCOME_START:
            return state;
        case actionTypes.CREATE_INCOME_SUCCESS:
            return state;
        case actionTypes.CREATE_INCOME_FAIL:
            const { message, code } = action.error;
            return { ...state, error: { message, code } }
        case actionTypes.LOAD_INCOME_SUCCESS:
            return { ...state, income: action.income };
        default:
            return state;
    }
}

export default reducer;