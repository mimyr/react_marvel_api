import React from 'react';
import PropTypes from 'prop-types';

const ComicItem = ({ comic: { title, description, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    return (
        <div className='card'>
            <h3 className='my-1'>{title}</h3>
            <img src={imgSrc} alt='' className='thumbnail-img' />
            <p>{description}</p>
        </div>
    );
};

ComicItem.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicItem;
