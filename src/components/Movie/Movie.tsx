import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config/keys';
import Navbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfo/MovieInfoBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import Actor from '../Actor/Actor';
import { StyledMovie, MovieGrid } from './StyledMovie';

const Movie = ({ match, location }) => {
    const [movie, setMovie] = useState({
        movie: null,
        actors: null,
        directors: [],
        loading: false,
    });

    useEffect(() => {
        // if (localStorage.getItem(`${match.params.movieId}`)) {
        //     const state = JSON.parse(
        //         localStorage.getItem(`${match.params.movieId}`)
        //     );
        //     this.setState({ ...state });
        // }
        setMovie({
            ...movie,
            loading: true,
        });

        const endpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        fetchItems(endpoint);
    }, []);

    const fetchItems = (endpoint) => {
        fetch(endpoint)
            .then((result) => result.json())
            .then((result) => {
                if (result.status.code) {
                    setMovie({
                        ...movie,
                        loading: false,
                    });
                } else {
                    setMovie({
                        ...movie,
                        movie: result,
                    });
                    const endpoint = `${API_URL}movie/${match.params.movieId}/credits?api_key=${API_KEY}`;
                    fetch(endpoint)
                        .then((result) => result.json())
                        .then((result) => {
                            const directors = result.crew.filter(
                                (member) => member.job === 'Director'
                            );
                            setMovie({
                                ...movie,
                                actors: result.cast,
                                directors,
                                loading: false,
                            });
                        });
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <StyledMovie className='rmdb-movie'>
            {movie.movie ? (
                <div>
                    <Navbar movie={location.movieName} />
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
                    <FourColGrid header={'Actors'}>
                        {movie.actors.map((element, i) => {
                            return <Actor key={i} actor={element} />;
                        })}
                    </FourColGrid>
                </MovieGrid>
            ) : null}
            {!movie.actors && !movie.loading ? (
                <h1>No Movie Found! ☹</h1>
            ) : null}
            {movie.loading ? <p>Loading</p> : null}
        </StyledMovie>
    );
};

export default Movie;
