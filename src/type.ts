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
