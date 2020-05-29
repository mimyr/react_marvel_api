import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ character: { name, description, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_small.${thumbnail.extension}`;
    return (
        <div className='card'>
            <h3 className='my-1'>{name}</h3>
            <img src={imgSrc} alt='' className='thumbnail-img' />
            <p>{description}</p>
        </div>
    );
};

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
};

export default CharacterItem;
