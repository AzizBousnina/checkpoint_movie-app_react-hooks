import React from 'react'
import MovieCard from '../Moviecard/MovieCard'
import './MovieList.css'

const MovieList = ({movies, inputSearch, newRate}) => {
  return (
    <div className='liste'>
        {
        newRate>0 ?
        movies.filter((movie)=>
        movie.rate===newRate)
        .map ((movie)=>
        <MovieCard movie={movie} key={movie.id} />)
        :
        movies.filter ((movie)=>
        movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())
        || movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim()))

          .map((movie) =>
        <MovieCard movie={movie} key={movie.id}/>)
      }
    </div>
  )
}

export default MovieList