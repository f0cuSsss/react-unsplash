import { FETCH_PHOTOS } from './types'
import unsplash from '../apis/unsplash'

export const fetchPhotos = term => async dispatch => {
    const response = await unsplash.get('/search/photos',
    {
        params: 
            { 
                query: term
            },
    });;
    console.log("FETCHED PHOTOS");
    console.log(response.data.results);
    dispatch({ type: FETCH_PHOTOS, payload: response.data.results });
}