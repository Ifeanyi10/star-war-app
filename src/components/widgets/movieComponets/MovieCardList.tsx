import React from 'react'
import './../../../App.css';
import MovieCard from './MovieCard';

export type Movies = {
    movies: [],
}

const MovieCardList: React.FC <Movies> = ({movies}) =>{
  return (
    <ul className='list'>
        {movies.map((movie, id) => (
            <MovieCard
                key={id}
                id={id}
                title={movie['title']}
                episode={movie['episode_id']}
                movieData={movie}
            />
        ))}
    </ul>
  );
}

export default MovieCardList