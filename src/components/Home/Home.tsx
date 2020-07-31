import React, { useEffect, useState } from 'react';
import HeroImage from '../HeroImage/HeroImage';
import Search from '../Search/Search';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import { HomeGrid, StyledProgress, H4, HomeSearch } from './StyledHome';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
} from '../../config/keys';

import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import { generateRandom } from '../../config/method';

export interface IMv {
    movies: Array<any>;
    heroImage: any;
    loading: boolean;
    currentPage: number;
    totalPages: number;
    searchTerm: string;
}

const Home: React.FC = () => {
    const [mv, setMv] = useState<IMv>({
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
    });

    const {
        movies,
        heroImage,
        loading,
        currentPage,
        totalPages,
        searchTerm,
    } = mv;

    useEffect(() => {
        setMv({
            ...mv,
            loading: true,
        });
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&&language=en-US&page=1`;

        fetchItems(endPoint);
        //eslint-disable-next-line
    }, []);

    const searchItems = (searchTerm: string): void => {
        let endpoint = '';
        setMv({
            ...mv,
            movies: [],
            loading: true,
            searchTerm: searchTerm,
        });

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }

        setTimeout(() => {
            fetchItems(endpoint);
        }, 500);
    };

    const loadMoreItems = (): void => {
        let endpoint = '';

        setMv({
            ...mv,
            loading: true,
        });

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
                currentPage + 1
            }`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
                currentPage + 1
            }`;
        }

        fetchItems(endpoint);
    };

    const fetchItems = (endPoint: string): void => {
        axios.get(endPoint).then((result) => {
            const random = generateRandom(0, 19);
            setMv({
                ...mv,
                movies: [...movies, ...result.data.results],
                heroImage: heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
                searchTerm: searchTerm,
            });
        });
    };

    const browseAll = () => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&&language=en-US&page=1`;

        axios.get(endPoint).then((result) => {
            const random = generateRandom(0, 19);

            setMv({
                ...mv,
                movies: [...result.data.results],
                heroImage: heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
                searchTerm: searchTerm,
            });
        });
        //eslint-disable-next-line
    };

    return (
        <div>
            {heroImage ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                    movieId={heroImage.id}
                />
            ) : null}
            <HomeSearch>
                <Search search={searchItems} />
                <div style={{ cursor: 'pointer' }} onClick={browseAll}>
                    <div onClick={browseAll}>
                        <H4>Browse All</H4>
                    </div>
                </div>
            </HomeSearch>
            {searchTerm ? (
                <h1 style={{ textAlign: 'center' }}>NOW SEARCH</h1>
            ) : (
                <h1 style={{ textAlign: 'center' }}>BROWSE MOVIES</h1>
            )}
            <HomeGrid>
                {movies.map((m, i) => {
                    return (
                        <MovieThumb
                            key={i}
                            clickable={true}
                            image={
                                m.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${m.poster_path}`
                                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                            }
                            movieId={m.id}
                            movieName={m.original_title}
                        />
                    );
                })}
            </HomeGrid>
            {loading ? (
                <StyledProgress>
                    <CircularProgress />
                </StyledProgress>
            ) : null}
            {currentPage <= totalPages && !loading ? (
                <LoadMoreBtn text={currentPage} onClick={loadMoreItems} />
            ) : null}
        </div>
    );
};

export default Home;
