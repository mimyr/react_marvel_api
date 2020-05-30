import { GET_EVENTS, ERROR_EVENTS } from '../actions/types';

const initialState = {
    events: [],
    error: null,
    loading: true,
};
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EVENTS:
            return {
                ...state,
                events: payload,
                loading: false,
            };
        case ERROR_EVENTS:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
