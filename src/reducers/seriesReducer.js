import { GET_SERIES, ERROR_SERIES } from '../actions/types';

const initialState = {
    series: [],
    error: null,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SERIES:
            return {
                ...state,
                series: payload,
                loading: false,
            };
        case ERROR_SERIES:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
