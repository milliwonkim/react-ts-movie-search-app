import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Movie from './Movie';
import Search from './Search';
import Landing from './Landing';

import {
    AppDiv,
    MoviesDiv,
    ErrorMessageDiv,
    ProgressDiv,
} from '../styles/styles';

import '../App.css';

const Movies: React.FC = ({
    dispatch,
    movies,
    loading,
    errorMessage,
    search,
    auth,
}) => {
    const retrievedMovies =
        loading && !errorMessage ? (
            <ProgressDiv>
                <CircularProgress />
            </ProgressDiv>
        ) : errorMessage ? (
            <ErrorMessageDiv>{errorMessage}</ErrorMessageDiv>
        ) : auth ? (
            <MoviesDiv>
                {movies.map((movie, index) => (
                    <Movie key={`${index}-${movie.Title}`} movie={movie} />
                ))}
            </MoviesDiv>
        ) : (
            <>
                <Landing />
                <Landing />
                <Landing />
                <Landing />
            </>
        );

    return (
        <>
            <AppDiv>
                <Search auth={auth} search={search} />
                <p>Sharing a few of our favourite movies</p>
                {retrievedMovies}
            </AppDiv>
        </>
    );
};

export default Movies;
