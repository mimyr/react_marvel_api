import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/eventActions';

import EventItem from './EventItem';

const EventList = ({ events, getEvents }) => {
    useEffect(() => {
        getEvents();
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            {events.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    events: state.events.events,
});

export default connect(mapStateToProps, { getEvents })(EventList);
