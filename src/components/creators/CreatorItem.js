import React from 'react';
import PropTypes from 'prop-types';

const CreatorItems = ({ creator: { fullName, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    return (
        <div>
            <div className='card'>
                <h3 className='my-1'>{fullName}</h3>
                <img src={imgSrc} alt='' className='thumbnail-img' />
            </div>
        </div>
    );
};

CreatorItems.propTypes = {
    creator: PropTypes.object.isRequired,
};

export default CreatorItems;
