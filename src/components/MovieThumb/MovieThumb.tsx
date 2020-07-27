import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledImg } from './StyledMovieThumb';

const MovieThumb = ({ movieId, movieName, image, clickable }) => {
    return (
        <>
            {clickable ? (
                <Link
                    to={{
                        pathname: `/${movieId}`,
                        movieName: `${movieName}`,
                    }}>
                    <StyledImg src={image} alt='movie thumb' />
                </Link>
            ) : (
                <StyledImg src={image} alt='movie thumb' />
            )}
        </>
    );
};

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
};

export default MovieThumb;
