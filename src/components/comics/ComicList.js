import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComics } from '../../actions/comicActions';

import ComicItem from './ComicItem';

const ComicList = ({ comics, getComics }) => {
    useEffect(() => {
        getComics();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            {comics.map((comic) => (
                <ComicItem key={comic.id} comic={comic} />
            ))}
        </div>
    );
};

ComicList.propTypes = {
    comics: PropTypes.array.isRequired,
    getComics: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    comics: state.comics.comics,
});

export default connect(mapStateToProps, { getComics })(ComicList);
