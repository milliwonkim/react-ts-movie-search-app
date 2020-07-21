import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import './App.css';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=de08387b';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

interface StateProps {
    loading: boolean;
    [index: number]: {
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
        imdbID: string;
    };
    errorMessage: string;
}

export default function App(): JSX.Element {
    const classes = useStyles();

    const [state, setState] = useState<StateProps>({
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
        // eslint-disable-next-line
    }, []);

    const search = (searchValue: string) => {
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

    // const a = (): void => {
    //     console.log(movies);
    // };

    return (
        <div className='App'>
            <div className='m-container'>
                <Header text='HOOKED' />
                <Search search={search} />
                <p
                    // onClick={a}
                    className='App-intro'>
                    Sharing a few of our favourite movies
                </p>
                <div className='movies'>{retrievedMovies}</div>
            </div>
        </div>
    );
}
