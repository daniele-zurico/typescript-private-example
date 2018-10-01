import * as actionTypes from '../actions/actionTypes';
const reducer = (state = [], action: any) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            let x = 3;
            if (x === 3) {
                x++
            }
            return state;
        default:
            return state;
    }
}

export default reducer;