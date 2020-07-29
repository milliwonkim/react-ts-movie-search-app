export interface IMv {
    movies: Array<any>;
    heroImage: any;
    loading: boolean;
    currentPage: number;
    totalPages: number;
    searchTerm: string;
}

export interface IMovie {
    original_title: string;
    runtime: number;
    budget: number;
    revenue: number;
}

export interface IActors {
    profile_path: string;
    name: string;
    character: string;
}

export interface IDirectors {
    name: string;
}

export interface ISpecificMv {
    movie: IMovie[] | any;
    actors: IActors[];
    directors: IDirectors[];
    loading: boolean;
}
