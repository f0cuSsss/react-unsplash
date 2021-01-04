import { 
    FETCH_PHOTOS,
    ADD_TO_FAVORITE,
    DISPLAY_POPUP,
    CLOSE_POPUP,
    SET_NEXT_PAGE,
    CLEAR_IMAGE_ARRAY
} from './types'
import unsplash from '../apis/unsplash'

export const fetchPhotos = () => async (dispatch, getState) => {
    const response = await unsplash.get('/search/photos',
    {
        params: 
            { 
                page: getState().page,
                per_page: 15,
                query: getState().form.SearchBar.values.searchterm
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

export const setNextPage = (page = -1) => (dispatch, getState) => {
    if(page === -1)
        dispatch({ type: SET_NEXT_PAGE, payload: getState().page + 1 });
    else
        dispatch({ type: SET_NEXT_PAGE, payload: 1 });
}

export const clearImagesArray = () => {
    return { type: CLEAR_IMAGE_ARRAY, payload: [] }
}