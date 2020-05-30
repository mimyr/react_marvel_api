import React from 'react';
import PropTypes from 'prop-types';

const EventItem = ({ event: { title, description, thumbnail } }) => {
    const imgSrc = `${thumbnail.path}/portrait_small.${thumbnail.extension}`;
    return (
        <div className='card'>
            <h3 className='my-1'>{title}</h3>
            <img src={imgSrc} alt='' className='thumbnail-img' />
            <p>{description}</p>
        </div>
    );
};

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventItem;
