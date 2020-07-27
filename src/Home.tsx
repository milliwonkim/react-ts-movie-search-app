// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import Dashboard from './components/Dashboard';
import { AppContext } from './config/AppContext';

const Home: React.FC = () => {
    const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=de08387b';

    const { dispatch, movies, loading, errorMessage, auth } = useContext(
        AppContext
    );

    useEffect(() => {
        dispatch({
            type: 'SEARCH_MOVIE',
        });
        axios.get(MOVIE_API_URL).then((res) => {
            if (res.data.Response === 'True') {
                return dispatch({
                    type: 'SET_MOVIE',
                    payload: res.data.Search,
                });
            }
        });

        dispatch({ type: 'SEARCH_MOVIE_ERROR' });
        // eslint-disable-next-line
    }, []);

    const search = (searchValue: string) => {
        dispatch({
            type: 'SEARCH_MOVIE',
        });

        axios
            .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=de08387b`)
            .then((res) => {
                if (res.data.Response === 'True') {
                    return dispatch({
                        type: 'SET_MOVIE',
                        payload: res.data.Search,
                    });
                } else {
                    dispatch({
                        type: 'SEARCH_MOVIE_ERROR',
                    });
                }
            });
    };

    return (
        <>
            <Movies
                dispatch={dispatch}
                movies={movies}
                loading={loading}
                errorMessage={errorMessage}
                auth={auth}
                search={search}
            />
            <Dashboard />
        </>
    );
};

export default Home;
