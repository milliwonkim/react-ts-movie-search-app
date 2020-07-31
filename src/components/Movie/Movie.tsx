import React, { useState, useEffect, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';

import { API_URL, API_KEY } from '../../config/keys';
import Navbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfo/MovieInfoBar';
import Actor from '../Actor/Actor';
import { BottomLoad, MovieGrid } from './StyledMovie';

import axios from 'axios';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

interface IMovie {
    original_title: string;
    runtime: number;
    budget: number;
    revenue: number;
}

interface IActors {
    profile_path: string;
    name: string;
    character: string;
}

interface IDirectors {
    name: string;
}

interface ISpecificMv {
    movie: IMovie[] | any;
    actors: IActors[];
    directors: IDirectors[];
    loading: boolean;
}

const Movie: FunctionComponent<RouteComponentProps> = ({ match }) => {
    const [specificMv, setSpecificMv] = useState<ISpecificMv>({
        movie: [],
        actors: [],
        directors: [],
        loading: false,
    });

    const [actorBrowse, setActorBrowse] = useState<boolean>(false);

    const { movie, actors, directors, loading } = specificMv;

    useEffect(() => {
        setSpecificMv({
            ...specificMv,
            loading: true,
        });

        const endpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        axios.get(endpoint).then((result) => {
            setSpecificMv({
                ...specificMv,
                movie: result.data,
            });
        });
        // eslint-disable-next-line
    }, []);

    const actor = () => {
        setActorBrowse((prev) => !prev);
        const endpoint2 = `${API_URL}movie/${match.params.movieId}/credits?api_key=${API_KEY}`;
        axios
            .get(endpoint2)
            .then((result) => {
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
            .catch((error) => console.log('Error:', error));
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
            {actors && actorBrowse ? (
                <MovieGrid>
                    {actors.map((element, i) => {
                        return <Actor key={i} actor={element} />;
                    })}
                </MovieGrid>
            ) : !loading ? null : (
                <p>Loading</p>
            )}

            <BottomLoad>
                <LoadMoreBtn
                    text={!actorBrowse ? 'Load Actors' : 'Close Actors'}
                    onClick={actor}
                />
            </BottomLoad>
        </div>
    );
};

export default Movie;
