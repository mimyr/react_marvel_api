import React, { useContext, useEffect } from 'react';

import CharacterItem from './CharacterItem';

import CharactersContext from '../../context/characters/charactersContext';

const Characters = () => {
    const charactersContext = useContext(CharactersContext);
    const { getCharacters, characters } = charactersContext;
    useEffect(() => {
        getCharacters();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1 className='my-2'>Superheroes</h1>
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </div>
    );
};

export default Characters;
