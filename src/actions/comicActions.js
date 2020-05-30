import { GET_COMICS, ERROR_COMICS } from './types';
import axios from 'axios';
import setAuth from '../utils/setAuth';

export const getComics = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/comics?${auth}`
        );
        dispatch({
            type: GET_COMICS,
            payload: res.data.data.results,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ERROR_COMICS,
            payload: err.status,
        });
    }
};
