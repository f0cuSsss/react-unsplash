import { DISPLAY_POPUP, CLOSE_POPUP } from '../actions/types'

const INITIAL_STATE = { image: null }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DISPLAY_POPUP:
            return { ...state, image: action.payload };
        case CLOSE_POPUP:
            return INITIAL_STATE;
        default:
            return state;
    }
}