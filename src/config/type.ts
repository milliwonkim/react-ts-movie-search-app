import { History } from 'history';

export interface MovieProps {
    Poster: string;
    Title: string;
    Year: number;
    imdbID: string;
}

export interface MoviesProps {
    loading: boolean;
    movies: MovieProps[];
    errorMessage: string;
}

export interface LoginProps {
    email: string;
    password: string;
    history: History;
}
