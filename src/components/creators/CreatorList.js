import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCreators } from '../../actions/creatorActions';

import CreatorItem from './CreatorItem';

const CreatorList = ({ creators, getCreators }) => {
    useEffect(() => {
        getCreators();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            {creators.map((creator) => (
                <CreatorItem key={creator.id} creator={creator} />
            ))}
        </div>
    );
};

CreatorList.propTypes = {
    creators: PropTypes.array.isRequired,
    getCreators: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    creators: state.creators.creators,
});

export default connect(mapStateToProps, { getCreators })(CreatorList);
