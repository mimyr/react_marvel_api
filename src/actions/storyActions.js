import { GET_STORIES, ERROR_STORIES } from './types';
import axios from 'axios';
import setAuth from '../utils/setAuth';

export const getStories = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/series?${auth}`
        );
        dispatch({
            type: GET_STORIES,
            payload: res.data.data.results,
        });
    } catch (err) {
        dispatch({
            type: ERROR_STORIES,
            payload: err.response.message,
        });
    }
};
