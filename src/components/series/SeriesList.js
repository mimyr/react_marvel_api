import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSeries } from '../../actions/seriesActions';

import SeriesItem from './SeriesItem';

const SeriesList = ({ series, getSeries }) => {
    useEffect(() => {
        getSeries();
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            {series.map((story) => (
                <SeriesItem key={story.id} story={story} />
            ))}
        </div>
    );
};

SeriesList.propTypes = {
    series: PropTypes.array.isRequired,
    getSeries: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    series: state.series.series,
});

export default connect(mapStateToProps, { getSeries })(SeriesList);
