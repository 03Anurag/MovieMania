import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import Search from './Components/Search';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/search/:id' element={<Search />}/>
        <Route path='*' element={<h1 style={{color:"white"}}>Page Not Found!</h1>}/>
      </Routes>
    </>
  )
}

export default App