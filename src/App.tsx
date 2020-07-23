import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

import { AppDiv, MoviesDiv, ErrorMessageDiv } from './styles/styles';

import { MoviesProps } from './type';

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

const App: React.FC = () => {
    const classes = useStyles();

    const [state, setState] = useState<MoviesProps>({
        loading: false,
        movies: [],
        errorMessage: '',
    });

    useEffect(() => {
        axios.get(MOVIE_API_URL).then((res) => {
            console.log('res: ', res);
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
                        errorMessage: res.data.Error,
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
            <ErrorMessageDiv>{errorMessage}</ErrorMessageDiv>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
        );

    return (
        <AppDiv>
            <Header text='Movie Search' />
            <Search search={search} />
            <p>Sharing a few of our favourite movies</p>
            <MoviesDiv>{retrievedMovies}</MoviesDiv>
        </AppDiv>
    );
};

export default App;
