import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStories } from '../../actions/storyActions';

import StoryItem from './storyItem';

const StoryList = ({ stories, getStories }) => {
    useEffect(() => {
        getStories();
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            {stories.map((story) => (
                <StoryItem key={story.id} story={story} />
            ))}
        </div>
    );
};

StoryList.propTypes = {
    stories: PropTypes.array.isRequired,
    getStories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    stories: state.stories.stories,
});

export default connect(mapStateToProps, { getStories })(StoryList);
