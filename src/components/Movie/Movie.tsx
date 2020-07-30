import React, { useState, useEffect, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';

import { API_URL, API_KEY } from '../../config/keys';
import Navbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfo/MovieInfoBar';
import Actor from '../Actor/Actor';
import { MovieGrid } from './StyledMovie';

import axios from 'axios';
import { ISpecificMv } from '../../config/type';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Movie: FunctionComponent<RouteComponentProps> = ({ match }) => {
    const [specificMv, setSpecificMv] = useState<ISpecificMv>({
        movie: [],
        actors: [],
        directors: [],
        loading: false,
    });

    const { movie, actors, directors, loading } = specificMv;

    useEffect(() => {
        setSpecificMv({
            ...specificMv,
            loading: true,
        });

        const endpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        axios.get(endpoint).then((result) => {
            // console.log('Specific Movie result: ', result.data.runtime);
            setSpecificMv({
                ...specificMv,
                movie: result.data,
            });
            console.log('result of axios: ', result.data.budget);
        });
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

                setSpecificMv({
                    ...specificMv,
                    actors: result.data.cast,
                    directors: directors,
                    loading: false,
                });
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            {movie ? (
                <div>
                    <Navbar movie={movie.original_title} />
                    <MovieInfo movie={movie} directors={directors} />
                    <MovieInfoBar
                        time={movie.runtime}
                        budget={movie.budget}
                        revenue={movie.revenue}
                    />
                </div>
            ) : null}
            {actors ? (
                <MovieGrid>
                    {actors.map((element, i) => {
                        return <Actor key={i} actor={element} />;
                    })}
                </MovieGrid>
            ) : !loading ? null : (
                <p>Loading</p>
            )}

            <LoadMoreBtn text='See Actors' onClick={actor} />
        </div>
    );
};

export default Movie;
