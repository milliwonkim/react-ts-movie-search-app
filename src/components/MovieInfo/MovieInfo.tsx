import React, { useEffect } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config/keys';
import MovieThumb from '../MovieThumb/MovieThumb';
import { Director } from './StyledMovieInfo';
import {
    Movieinfo,
    MovieinfoContent,
    MovieinfoThumb,
    MovieinfoText,
    Rating,
} from './StyledMovieInfo';

import LinearProgress, {
    LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
) {
    return (
        <Box display='flex' alignItems='center'>
            <Box width='100%' height='20%' mr={1}>
                <LinearProgress
                    color='secondary'
                    variant='determinate'
                    {...props}
                />
            </Box>
            <Box minWidth={35}>
                <Typography color='primary' variant='body2'>
                    {props.value / 10}
                </Typography>
            </Box>
        </Box>
    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#ffffff',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#0652DD',
        },
    },
});

interface IMovie {
    original_title: string;
    runtime: number;
    budget: number;
    revenue: number;
}

interface IDirectors {
    name: string;
}

const MovieInfo = ({
    movie,
    directors,
}: {
    movie: IMovie[] | any;
    directors: IDirectors[];
}) => {
    // eslint-disable-next-line
    const [progress, setProgress] = React.useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 10 : prevProgress + 10
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Movieinfo
            style={{
                background: movie.backdrop_path
                    ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
                    : '#000',
            }}>
            <MovieinfoContent>
                <MovieinfoThumb>
                    <MovieThumb
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : './images/no_image.jpg'
                        }
                        clickable={false}
                    />
                </MovieinfoThumb>
                <MovieinfoText>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <Rating className='rmdb-rating'>
                        <ThemeProvider theme={theme}>
                            <LinearProgressWithLabel
                                value={movie.vote_average * 10}
                            />
                        </ThemeProvider>
                    </Rating>
                    <br></br>
                    {directors.length > 1 ? (
                        <h3>DIRECTORS</h3>
                    ) : (
                        <h3>DIRECTOR</h3>
                    )}
                    {directors.map((element, i) => {
                        return (
                            <Director key={i} className='rmdb-director'>
                                {element.name}
                            </Director>
                        );
                    })}
                </MovieinfoText>
            </MovieinfoContent>
        </Movieinfo>
    );
};

export default MovieInfo;
