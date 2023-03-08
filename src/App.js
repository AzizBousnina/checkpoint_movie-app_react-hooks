import React, {useState} from 'react';
import './App.css';
import {moviesData} from './Components/Data';
import MovieList from './Components/MovieList/MovieList';
import AddMovies from './Components/AddMovie/AddMovies'; 
import FilterMovie from './Components/FilterMovie/FilterMovie';
import FilterRate from './Components/FilterRate/FilterRate';
function App() {
  const [movies , setMovies] = useState(moviesData);
  const add = (newMovie) => {
setMovies([...movies,newMovie])
  }
  const [inputSearch , setInputSearch] = useState("");
  const [newRate , setNewRate] = useState("");

  return (
    <div className="App">    
     <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterRate newRate={newRate} setNewRate={setNewRate} />
      <AddMovies add={add} /> 
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
         
    </div>
  );
}

export default App;
