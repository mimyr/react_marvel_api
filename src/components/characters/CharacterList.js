import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacters } from '../../actions/characterActions';

import CharacterItem from './CharacterItem';

const CharacterList = ({ characters, getCharacters }) => {
    useEffect(() => {
        getCharacters();
        //eslint-disable-next-line
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </div>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    characters: state.characters.characters,
});

export default connect(mapStateToProps, { getCharacters })(CharacterList);
