import { GET_CHARACTERS, ERROR_CHARACTERS } from './types';
import axios from 'axios';
import setAuth from '../utils/setAuth';

export const getCharacters = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/characters?${auth}`
        );
        dispatch({
            type: GET_CHARACTERS,
            payload: res.data.data.results,
        });
    } catch (err) {
        dispatch({
            type: ERROR_CHARACTERS,
            payload: err.response.data,
        });
    }
};
