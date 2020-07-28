import React, { useState, useEffect } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Search from '../Search/Search';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import { HomeGrid } from './StyledHome';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
} from '../../config/keys';

import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState({
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
    });

    useEffect(() => {
        console.log('Mounted');
        setMovies({
            ...movies,
            loading: true,
        });

        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&&language=en-US&page=1`;
        fetchItems(endPoint);
        // eslint-disable-next-line
    }, []);

    const searchItems = (searchTerm: string): void => {
        let endpoint = '';
        setMovies({
            ...movies,
            movies: [],
            loading: true,
            searchTerm: searchTerm,
        });

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        specificSearch(endpoint);
    };

    // Home.tsx

    const specificSearch = (endPoint: string): void => {
        axios.get(endPoint).then((result) => {
            const generateRandom = function (min, max) {
                var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
                return ranNum;
            };

            const random = generateRandom(0, 19);
            console.log('Specific Search Results: ', result.data.results);
            setMovies({
                ...movies,
                movies: [...result.data.results],
                heroImage: movies.heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
            });
        });
    };

    const fetchItems = (endPoint: string): void => {
        axios.get(endPoint).then((result) => {
            const generateRandom = function (min, max) {
                var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
                return ranNum;
            };

            const random = generateRandom(0, 19);
            console.log('Fetch Results: ', result.data.results);
            setMovies({
                ...movies,
                movies: [...movies.movies, ...result.data.results],
                heroImage: movies.heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
            });
        });
    };

    const loadMoreItems = (): void => {
        let endpoint = '';

        setMovies({
            ...movies,
            loading: true,
        });

        if (movies.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
                movies.currentPage + 1
            }`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
                movies.searchTerm
            }&page=${movies.currentPage + 1}`;
        }

        fetchItems(endpoint);
    };

    return (
        <div>
            {movies.heroImage ? (
                <div>
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.heroImage.backdrop_path}`}
                        title={movies.heroImage.original_title}
                        text={movies.heroImage.overview}
                        movieId={movies.heroImage.id}
                    />
                    <Search search={searchItems} />
                </div>
            ) : null}
            {movies.searchTerm ? (
                <h1 style={{ textAlign: 'center' }}>Search Result</h1>
            ) : (
                <h1 style={{ textAlign: 'center' }}>Popular Movies</h1>
            )}
            <HomeGrid>
                {movies.movies.map((element, i) => {
                    return (
                        <MovieThumb
                            key={i}
                            clickable={true}
                            image={
                                element.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                            }
                            movieId={element.id}
                            movieName={element.original_title}
                        />
                    );
                })}
            </HomeGrid>
            {movies.loading ? <p>Loading</p> : null}
            {movies.currentPage <= movies.totalPages && !movies.loading ? (
                <LoadMoreBtn text='Load More' onClick={loadMoreItems} />
            ) : null}
        </div>
    );
};

export default Home;
