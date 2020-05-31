import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ character: { name, description, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
    return (
        <div className='bg-gray-200 rounded-lg overflow-hidden shadow-sm flex'>
            <div className='w-1/4 h-auto'>
                <img src={imgSrc} alt='' className='' />
            </div>
            <div className=' w-3/4 flex flex-col'>
                <h3 className='font-bold text-lg my-2'>{name}</h3>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
        </div>
    );
};

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
};

export default CharacterItem;
