import { GET_CHARACTERS, CHARACTERS_ERROR } from '../types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
                loading: false,
            };
        case CHARACTERS_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
