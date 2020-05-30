import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';
import creatorReducer from './creatorReducer';
import eventReducer from './eventsReducer';

export default combineReducers({
    characters: characterReducer,
    comics: comicReducer,
    creators: creatorReducer,
    events: eventReducer,
});
