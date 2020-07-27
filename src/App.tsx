// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from './config/AppContext';
import axios from 'axios';
import Movies from './components/Movies';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
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
        <BrowserRouter>
            <Navbar auth={auth} dispatch={dispatch} />
            <Switch>
                <Route
                    exact
                    path='/'
                    component={() => (
                        <Movies
                            dispatch={dispatch}
                            movies={movies}
                            loading={loading}
                            errorMessage={errorMessage}
                            auth={auth}
                            search={search}
                        />
                    )}
                />
                <Route
                    path='/login'
                    component={() => <Login auth={auth} dispatch={dispatch} />}
                />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
