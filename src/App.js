
import './App.css';
import Navigation from './Navigation/Navigation'
import {moviesData} from './Data'
import { useState } from 'react';
import MovieList from './MovieList/MovieList';
import AddMovie from './AddMovie/AddMovie';
import FiltreMovie from './FiltreMovie/FiltreMovie';

function App() {
const [movies, setMovies] = useState(moviesData)

const [inputSearch, setInputSearch] = useState('')

const [newRate, setNewRate] = useState(0)

const add = (newMovie) => {
  setMovies([...movies, newMovie])
}

  return (
    <div className="App">
  


  <Navigation />
  <FiltreMovie inputSearch={inputSearch} setInputSearch={setInputSearch} newRate={newRate} setNewRate={setNewRate} />
  <AddMovie add={add} />
  <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
    </div>
  );
}

export default App