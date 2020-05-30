import { GET_CHARACTERS, ERROR_CHARACTERS } from '../actions/types';

const initialState = {
    characters: [],
    loading: true,
    error: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
                loading: false,
            };
        case ERROR_CHARACTERS:
            console.error(payload);
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
