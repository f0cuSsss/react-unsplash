import { 
    FETCH_PHOTOS,
    ADD_TO_FAVORITE,
    DISPLAY_POPUP,
    CLOSE_POPUP
} from './types'
import unsplash from '../apis/unsplash'

export const fetchPhotos = term => async dispatch => {
    const response = await unsplash.get('/search/photos',
    {
        params: 
            { 
                page: 1,
                per_page: 15,
                query: term
            },
    });;
    dispatch({ type: FETCH_PHOTOS, payload: response.data.results });
}

export const addToFavorite = image => {
    return { type: ADD_TO_FAVORITE, payload: image }
}

export const displayPopup = image => {
    return { type: DISPLAY_POPUP, payload: image }
}

export const closePopup = () => {
    return { type: CLOSE_POPUP }
}