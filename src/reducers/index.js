import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';
import creatorReducer from './creatorReducer';
import eventReducer from './eventsReducer';
import seriesReducer from './seriesReducer';
import storyReducer from './storyReducer';

export default combineReducers({
    characters: characterReducer,
    comics: comicReducer,
    creators: creatorReducer,
    events: eventReducer,
    series: seriesReducer,
    stories: storyReducer,
});
