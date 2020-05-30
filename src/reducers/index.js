import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';

export default combineReducers({
    characters: characterReducer,
    comics: comicReducer,
});
