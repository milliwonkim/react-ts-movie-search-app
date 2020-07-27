import React, { useState, useEffect } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Search from '../Search/Search';
import FourColGrid from '../FourColGrid/FourColGrid';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import { StyledHome, HomeGrid } from './StyledHome';
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
        // if (localStorage.getItem('HomeState')) {
        //     const state = JSON.parse(localStorage.getItem('HomeState'));
        //     setMovies({
        //         ...movies,
        //         ...state,
        //     });
        // }

        setMovies({
            ...movies,
            loading: true,
        });

        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&&language=en-US&page=1`;
        fetchItems(endPoint);
    }, []);

    const fetchItems = (endPoint: string): void => {
        axios.get(endPoint).then((result) => {
            const generateRandom = function (min, max) {
                var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
                return ranNum;
            };

            const random = generateRandom(0, 19);
            console.log('result: ', result);
            setMovies({
                ...movies,
                movies: [...movies.movies, ...result.data.results],
                heroImage: movies.heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
            });
            // if (movies.searchTerm === '')
            //     localStorage.setItem('HomeState', JSON.stringify(movies));
        });
    };

    const searchItems = (searchTerm: string): void => {
        console.log(searchTerm);
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
        fetchItems(endpoint);
    };

    const loadMoreItems = (): void => {
        let endpoint = '';

        setMovies({
            ...movies,
            loadgin: true,
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
        <StyledHome>
            {movies.heroImage ? (
                <div>
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.heroImage.backdrop_path}`}
                        title={movies.heroImage.original_title}
                        text={movies.heroImage.overview}
                    />
                    <Search search={searchItems} />
                </div>
            ) : null}
            <HomeGrid>
                <FourColGrid
                    header={
                        movies.searchTerm ? 'Search Result' : 'Popular Movies'
                    }
                    loading={movies.loading}>
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
                </FourColGrid>
            </HomeGrid>
            {movies.loading ? <p>Loading</p> : null}
            {movies.currentPage <= movies.totalPages && !movies.loading ? (
                <LoadMoreBtn text='Load More' onClick={loadMoreItems} />
            ) : null}
        </StyledHome>
    );
};

export default Home;
