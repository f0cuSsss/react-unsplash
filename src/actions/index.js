import { 
    FETCH_PHOTOS,
    ADD_TO_FAVORITE
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