import * as actionTypes from '../actions/actionTypes';
const reducer = (state = [], action: any) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return state;
        case actionTypes.LOGIN_SUCCESS:
            debugger
            return state;
        default:
            return state;
    }
}

export default reducer;