import React from 'react';
import { MovieDiv } from '../styles/styles';

import { MovieProps } from '../type';

const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }: { movie: MovieProps }) => {
    const poster =
        movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const handleClick = (): void => {
        window.open(`https://imdb.com/title/${movie.imdbID}`);
    };

    return (
        <MovieDiv onClick={handleClick} key={movie.imdbID}>
            <img
                width='300'
                height='500'
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
            />
            <div style={{ padding: '10px' }}>
                <h2>{movie.Title}</h2>
                <p>({movie.Year})</p>
            </div>
        </MovieDiv>
    );
};

export default Movie;
