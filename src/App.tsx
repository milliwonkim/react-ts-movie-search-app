import React, { useState, useReducer, useEffect, useContext } from 'react';

import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
// import { initialState, reducer } from './store/reducer';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import { MovieContext } from './store/MovieContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=de08387b';

export default function App(): JSX.Element {
    const classes = useStyles();

    const [state, setState] = useState({
        loading: false,
        movies: [],
        errorMessage: '',
    });

    useEffect(() => {
        axios.get(MOVIE_API_URL).then((res) => {
            setState({
                ...state,
                movies: res.data.Search,
            });
        });
    }, []);

    const search = (searchValue) => {
        setState({
            ...state,
            loading: true,
        });

        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=de08387b`).then(
            (res) => {
                if (res.data.Response === 'True') {
                    setState({
                        ...state,
                        movies: res.data.Search,
                    });
                } else {
                    setState({
                        ...state,
                        errorMassage: res.data.Error,
                    });
                }
            }
        );
    };

    const { movies, errorMessage, loading } = state;

    const retrievedMovies =
        loading && !errorMessage ? (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        ) : errorMessage ? (
            <div className='errorMessage'>{errorMessage}</div>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
        );

    return (
        <MovieContext.Provider value={state}>
            <div className='App'>
                <div className='m-container'>
                    <Header text='HOOKED' />
                    <Search search={search} />
                    <p className='App-intro'>
                        Sharing a few of our favourite movies
                    </p>
                    <div className='movies'>{retrievedMovies}</div>
                </div>
            </div>
        </MovieContext.Provider>
    );
}
