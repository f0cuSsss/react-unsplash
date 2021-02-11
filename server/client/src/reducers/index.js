import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import UserReducer from './UserReducer'
import ImageReducer from './ImageReducer'
import FavoriteReducer from './FavoriteReducer'
import PopupReducer from './PopupReducer'
import NextPageReducer from './NextPageReducer'

export default combineReducers({
    current_user: UserReducer,
    images: ImageReducer,
    page: NextPageReducer,
    favorite_images: FavoriteReducer,
    popup:  PopupReducer,
    form: formReducer
});