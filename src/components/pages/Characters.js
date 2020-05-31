import React from 'react';
import CharacterList from '../characters/CharacterList';

const Characters = () => {
    return (
        <div>
            <h1 className='font-bold text-xl my-3'>Superheroes</h1>
            <CharacterList />
        </div>
    );
};

export default Characters;
