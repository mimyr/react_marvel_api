import { GET_COMICS, ERROR_COMICS } from '../actions/types';

const initialState = {
    comics: [],
    loading: true,
    error: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_COMICS:
            return {
                ...state,
                comics: payload,
                loading: false,
            };
        case ERROR_COMICS:
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
