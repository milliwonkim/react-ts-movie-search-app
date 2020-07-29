import React, { useEffect } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config/keys';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import { Director } from './StyledMovieInfo';
import {
    Movieinfo,
    MovieinfoContent,
    MovieinfoThumb,
    MovieinfoText,
    Rating,
} from './StyledMovieInfo';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {
    LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
) {
    return (
        <Box display='flex' alignItems='center'>
            <Box width='100%' height='20%' mr={1}>
                <LinearProgress variant='determinate' {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant='body2'>{props.value / 10}</Typography>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const MovieInfo = ({ movie, directors }) => {
    const classes = useStyles();
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
                        <div className={classes.root}>
                            <LinearProgressWithLabel
                                value={movie.vote_average * 10}
                            />
                        </div>
                        {/**
                            <Meter
                                min='0'
                                max='100'
                                // optimum='100'
                                // low='40'
                                // high='70'
                                value={movie.vote_average * 10}></Meter>
                            <Score>{movie.vote_average}</Score>
                        */}
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
                <FontAwesome className='fa-film' name='film' size='5x' />
            </MovieinfoContent>
        </Movieinfo>
    );
};

export default MovieInfo;
