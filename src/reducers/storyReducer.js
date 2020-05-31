import { GET_STORIES, ERROR_STORIES } from '../actions/types';

const initialState = {
    stories: [],
    error: null,
    loading: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_STORIES:
            return {
                ...state,
                stories: payload,
                loading: false,
            };
        case ERROR_STORIES:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
