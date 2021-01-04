import { SET_NEXT_PAGE } from '../actions/types'

export default (state = 1, action) => {
    switch(action.type) {
        case SET_NEXT_PAGE:
            return action.payload;
        default:
            return state;
    }
}