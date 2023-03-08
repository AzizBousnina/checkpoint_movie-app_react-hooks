import React from 'react'
import Home from './Components/Page/Home';
import {Routes , Route} from 'react-router-dom';
import NavBar from'./Components/Navigation/NavBar';
import App from './App'
import Trailer from '../src/Components/Page/Trailer'
import Description from './Components/Page/Description';
const MovieRouter = () => {
  return (
    <div>
        <NavBar />
    <Routes>
    <Route exact path="/" element = {<App/>}/>
    <Route exact path="/Home" element={<Home/>}/>
    <Route path="/Trailer/:id" element={<Trailer/>} />
    <Route path='/Description/:id' element={<Description/>}/>
    </Routes>
    </div>
  )
}

export default MovieRouter