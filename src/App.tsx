import React, { useReducer, useEffect, createContext } from 'react';

import Header from './components/Header';
import Movie from './components/Movie';
// import spinner from '../assets/ajax-loader.gif';
import Search from './components/Search';
import { initialState, reducer } from './store/reducer';
import axios from 'axios';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=de08387b';

const movieContext = createContext();

const App: React.FC = () => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(MOVIE_API_URL).then((jsonResponse) => {
            dispatch({
                type: 'SEARCH_MOVIES_SUCCESS',
                payload: jsonResponse.data.Search,
            });
        });
    }, []);

    const search = (searchValue) => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST',
        });

        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=de08387b`).then(
            (jsonResponse) => {
                if (jsonResponse.data.Response === 'True') {
                    dispatch({
                        type: 'SEARCH_MOVIES_SUCCESS',
                        payload: jsonResponse.data.Search,
                    });
                } else {
                    dispatch({
                        type: 'SEARCH_MOVIES_FAILURE',
                        error: jsonResponse.data.Error,
                    });
                }
            }
        );
    };

    const { movies, errorMessage, loading } = state;

    const retrievedMovies =
        loading && !errorMessage ? (
            // <img className='spinner' src={spinner} alt='Loading spinner' />
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
        // <movieContext.Provider value={}>
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
        // </movieContext.Provider>
    );
};

export default App;
