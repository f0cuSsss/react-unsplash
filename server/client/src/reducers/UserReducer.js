import { CHECK_AUTH } from '../actions/types'

export default (state = null, action) => {
    switch(action.type) {
        case CHECK_AUTH:
            return action.payload || false;
        default:
            return state;
    }
}