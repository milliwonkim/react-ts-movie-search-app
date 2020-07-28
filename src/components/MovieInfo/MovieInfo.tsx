import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config/keys';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import { Director } from './StyledMovieInfo';
import {
    Movieinfo,
    MovieinfoContent,
    MovieinfoThumb,
    MovieinfoText,
    Rating,
    Meter,
    Score,
} from './StyledMovieInfo';

const MovieInfo = ({ movie, directors }) => {
    return (
        <Movieinfo
            style={{
                background: movie.backdrop_path
                    ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
                    : '#000',
            }}>
            <MovieinfoContent>
                <MovieinfoThumb>
                    <MovieThumb
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : './images/no_image.jpg'
                        }
                        clickable={false}
                    />
                </MovieinfoThumb>
                <MovieinfoText>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <Rating className='rmdb-rating'>
                        <Meter
                            min='0'
                            max='100'
                            // optimum='100'
                            // low='40'
                            // high='70'
                            value={movie.vote_average * 10}></Meter>
                        <Score>{movie.vote_average}</Score>
                    </Rating>
                    <br></br>
                    <br></br>
                    {directors.length > 1 ? (
                        <h3>DIRECTORS</h3>
                    ) : (
                        <h3>DIRECTOR</h3>
                    )}
                    {directors.map((element, i) => {
                        return (
                            <Director key={i} className='rmdb-director'>
                                {element.name}
                            </Director>
                        );
                    })}
                </MovieinfoText>
                <FontAwesome className='fa-film' name='film' size='5x' />
            </MovieinfoContent>
        </Movieinfo>
    );
};

export default MovieInfo;
