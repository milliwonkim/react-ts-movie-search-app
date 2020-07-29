import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledImg } from './StyledMovieThumb';

const MovieThumb = ({ movieId, movieName, image, clickable }) => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
            }}>
            {clickable ? (
                <Link
                    to={{
                        pathname: `/${movieId}`,
                        movieName: `${movieName}`,
                    }}
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        textAlign: 'center',
                    }}>
                    <StyledImg src={image} alt='movie thumb' />
                    <p>{movieName}</p>
                </Link>
            ) : (
                <StyledImg src={image} alt='movie thumb' />
            )}
        </div>
    );
};

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
};

export default MovieThumb;
