import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ImageReducer from './ImageReducer'

export default combineReducers({
    images: ImageReducer,
    form: formReducer
});