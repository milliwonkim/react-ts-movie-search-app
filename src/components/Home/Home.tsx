import React, { useEffect } from 'react';
import useStateWithCallback from 'use-state-with-callback';
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

import { IMv } from '../../config/type';
import CircularProgress from '@material-ui/core/CircularProgress';
import { generateRandom } from '../../config/method';

const Home: React.FC = () => {
    const [mv, setMv] = useStateWithCallback<IMv>(
        {
            movies: [],
            heroImage: null,
            loading: false,
            currentPage: 0,
            totalPages: 0,
            searchTerm: '',
        },
        () => {
            if (searchTerm === '') {
                localStorage.setItem('HomeState', JSON.stringify(mv));
            }
        }
    );

    const {
        movies,
        heroImage,
        loading,
        currentPage,
        totalPages,
        searchTerm,
    } = mv;

    useEffect(() => {
        if (localStorage.getItem('HomeState')) {
            const local = localStorage.getItem('HomeState');
            setMv(...local);
        }

        setMv({
            ...mv,
            loading: true,
            searchTerm: searchTerm,
        });
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&&language=en-US&page=1`;

        fetchItems(endPoint);
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log('useEffect 2');
        if (searchTerm === '') {
            localStorage.setItem('HomeState', JSON.stringify(mv));
        }
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

        console.log('searchTerm in searchItems');

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            console.log(`searchItems searchTerm === ${searchTerm}`, endpoint);
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
            console.log(`searchItems searchTerm === ${searchTerm}`, endpoint);
        }

        fetchItems(endpoint);
    };

    const loadMoreItems = (): void => {
        let endpoint = '';

        setMv({
            ...mv,
            loading: true,
        });

        console.log('searchTerm in loadMoreItems');

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
                currentPage + 1
            }`;
            console.log(
                `loadMore Items searchTerm === ${searchTerm}`,
                endpoint
            );
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
                currentPage + 1
            }`;
            console.log(
                `loadMore Items searchTerm === ${searchTerm}`,
                endpoint
            );
        }

        fetchItems(endpoint);
    };

    const fetchItems = (endPoint: string): void => {
        axios.get(endPoint).then((result) => {
            console.log(result.data);
            const random = generateRandom(0, 19);
            console.log('before movies', movies);
            console.log('before searchTerm', searchTerm);
            setMv({
                ...mv,
                movies: [...movies, ...result.data.results],
                heroImage: heroImage || result.data.results[random],
                loading: false,
                currentPage: result.data.page,
                totalPages: result.data.total_pages,
                searchTerm: searchTerm,
            });
            console.log('after movies', movies);
            console.log('after searchTerm', searchTerm);
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
                    console.log('m: ', typeof m.id);
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
