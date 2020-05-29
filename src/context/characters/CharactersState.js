import React, { useReducer } from 'react';
import axios from 'axios';
import MD5 from 'crypto-js/md5';

import CharactersContext from './charactersContext';
import CharactersReducer from './charactersReducer';
import { GET_CHARACTERS, CHARACTERS_ERROR } from '../types';

const CharactersState = (props) => {
    const initialState = {
        characters: [],
        character: {},
        error: null,
    };

    const [state, dispatch] = useReducer(CharactersReducer, initialState);

    // Get Characters
    const getCharacters = async () => {
        try {
            const key = process.env.REACT_APP_MARVEL_API_KEY;
            const secret = process.env.REACT_APP_MARVEL_API_SECRET;
            const ts = Date.now();
            const hash = MD5(ts + secret + key).toString();
            const res = await axios.get(
                `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${key}&hash=${hash}`
            );
            dispatch({
                type: GET_CHARACTERS,
                payload: res.data.data.results,
            });
        } catch (err) {
            dispatch({
                type: CHARACTERS_ERROR,
                payload: err.response.message,
            });
        }
    };

    return (
        <CharactersContext.Provider
            value={{
                characters: state.characters,
                character: state.character,
                loading: state.loading,
                getCharacters,
            }}
        >
            {props.children}
        </CharactersContext.Provider>
    );
};

export default CharactersState;
