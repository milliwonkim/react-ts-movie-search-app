import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

type MovieProps = {
    movie: {
        Poster: string;
        Title: string;
        Year: number;
    };
};

function Movie({ movie }: MovieProps) {
    const a = () => {
        console.log(typeof movie);
        console.log(typeof movie.Poster);
    };

    const poster =
        movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className='movie'>
            <h2 onClick={a}>{movie.Title}</h2>
            <div>
                <img
                    width='200'
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
}

export default Movie;
