import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                    <img src={movie.Poster} alt='film' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
