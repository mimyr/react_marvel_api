import { GET_CREATORS, ERROR_CREATORS } from '../actions/types';

const initialState = {
    creators: [],
    errors: null,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CREATORS:
            return {
                ...state,
                creators: payload,
                loading: false,
            };
        case ERROR_CREATORS:
            console.error(payload);
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
