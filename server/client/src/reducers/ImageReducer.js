import { FETCH_PHOTOS, CLEAR_IMAGE_ARRAY } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_PHOTOS:
            return [ ...state, ...action.payload ];
        case CLEAR_IMAGE_ARRAY:
            return action.payload;
        default:
            return state;
    }
}