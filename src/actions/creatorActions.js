import { GET_CREATORS, ERROR_CREATORS } from './types';
import axios from 'axios';
import setAuth from '../utils/setAuth';

export const getCreators = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/creators?${auth}`
        );
        dispatch({
            type: GET_CREATORS,
            payload: res.data.data.results,
        });
    } catch (err) {
        dispatch({
            type: ERROR_CREATORS,
            payload: err.response.data,
        });
    }
};
