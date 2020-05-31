import React from 'react';
import PropTypes from 'prop-types';

const SeriesItem = ({ story: { title, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    return (
        <div>
            <div className='card'>
                <h3 className='my-1'>{title}</h3>
                <img src={imgSrc} alt='' className='thumbnail-img' />
            </div>
        </div>
    );
};

SeriesItem.propTypes = {
    story: PropTypes.object.isRequired,
};

export default SeriesItem;
