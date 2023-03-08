import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './movielist.css'; 
const MovieList = ({movies , inputSearch , rateSearch}) => {

  return (
    <div className='liste'> 
        {(rateSearch>0) ? movies 
        .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()) && movie.rate == (rateSearch))
        .map(movie => <MovieCard movie={movie} key={movie.id} />):
        movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
        .map(movie => <MovieCard movie={movie} key={movie.id} />)
        };    
       
    </div>
  ) 
}

export default MovieList