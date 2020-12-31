import { ADD_TO_FAVORITE } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TO_FAVORITE:
            if(state.find(img => img.id === action.payload.id))
            {
                return state.filter(img => img.id != action.payload.id);
            }
            else {
                return [...state, action.payload]
            }
        default:
            return state;
    }
}