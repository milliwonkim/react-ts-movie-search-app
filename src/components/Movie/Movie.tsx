import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config/keys';
import Navbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfo/MovieInfoBar';
import Actor from '../Actor/Actor';
import { MovieGrid } from './StyledMovie';

import axios from 'axios';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Movie = ({ match }) => {
    const [movie, setMovie] = useState({
        movie: null,
        actors: null,
        directors: [],
        loading: false,
    });

    useEffect(() => {
        setMovie({
            ...movie,
            loading: true,
        });

        const endpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        axios.get(endpoint).then((result) => {
            console.log('Specific Movie result: ', result);
            setMovie({
                ...movie,
                movie: result.data,
            });
        });
        console.log('movie1: ', movie);

        // eslint-disable-next-line
    }, []);

    const actor = () => {
        const endpoint2 = `${API_URL}movie/${match.params.movieId}/credits?api_key=${API_KEY}`;

        axios
            .get(endpoint2)
            .then((result) => {
                console.log('actors result: ', result);
                const directors = result.data.crew.filter(
                    (member) => member.job === 'Director'
                );

                setMovie({
                    ...movie,
                    actors: result.data.cast,
                    directors: directors,
                    loading: false,
                });
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            {movie.movie ? (
                <div>
                    <Navbar movie={movie.movie.original_title} />
                    <MovieInfo
                        movie={movie.movie}
                        directors={movie.directors}
                    />
                    <MovieInfoBar
                        time={movie.movie.runtime}
                        budget={movie.movie.budget}
                        revenue={movie.movie.revenue}
                    />
                </div>
            ) : null}
            {movie.actors ? (
                <MovieGrid>
                    {movie.actors.map((element, i) => {
                        return <Actor key={i} actor={element} />;
                    })}
                </MovieGrid>
            ) : !movie.loading ? null : (
                <p>Loading</p>
            )}

            <LoadMoreBtn text='See Actors' onClick={actor} />
        </div>
    );
};

export default Movie;
