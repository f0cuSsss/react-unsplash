import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ImageReducer from './ImageReducer'
import FavoriteReducer from './FavoriteReducer'

export default combineReducers({
    images: ImageReducer,
    favorite_images: FavoriteReducer,
    form: formReducer
});