import { GET_SERIES, ERROR_SERIES } from './types';
import setAuth from '../utils/setAuth';
import axios from 'axios';

export const getSeries = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/series?${auth}`
        );
        dispatch({
            type: GET_SERIES,
            payload: res.data.data.results,
        });
    } catch (err) {
        dispatch({
            type: ERROR_SERIES,
            payload: err.response.message,
        });
    }
};
