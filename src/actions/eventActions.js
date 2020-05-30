import { GET_EVENTS, ERROR_EVENTS } from './types';
import axios from 'axios';
import setAuth from '../utils/setAuth';

export const getEvents = () => async (dispatch) => {
    try {
        const auth = setAuth();
        const res = await axios.get(
            `http://gateway.marvel.com/v1/public/events?${auth}`
        );
        dispatch({
            type: GET_EVENTS,
            payload: res.data.data.results,
        });
    } catch (err) {
        dispatch({
            type: ERROR_EVENTS,
            payload: err.response.message,
        });
    }
};
