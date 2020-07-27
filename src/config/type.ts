import { History } from 'history';

export interface MovieState {
    Poster: string;
    Title: string;
    Year: number;
    imdbID: string;
}

export interface MoviesState {
    movies: MovieState[];
    heroImage: null;
    loading: boolean;
    currentPage: number;
    totalPages: number;
    errorMessage: string;
    auth: boolean;
}

export interface LoginState {
    email: string;
    password: string;
    history: History;
}
