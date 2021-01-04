import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import ImageReducer from './ImageReducer'
import FavoriteReducer from './FavoriteReducer'
import PopupReducer from './PopupReducer'
import NextPageReducer from './NextPageReducer'

export default combineReducers({
    images: ImageReducer,
    page: NextPageReducer,
    favorite_images: FavoriteReducer,
    popup:  PopupReducer,
    form: formReducer
});