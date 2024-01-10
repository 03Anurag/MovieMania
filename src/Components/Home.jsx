import React from 'react';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import { IoSearch } from "react-icons/io5";

const Home = () => {
const API_URL= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b760080de10e3e37846e8366ded67d02&page=';

    const [movies , setMovies] = useState([]);
    const [name , setName] = useState('');

    async function getMovies(){
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(()=>{
        getMovies();
    },[])
    
  return (
    <>
        <nav>
            <h1>MovieMania</h1>
            <div className="form">
                <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Search Here...' />
                <Link to={`/search/${name}`}><IoSearch className='search'/></Link>
            </div>
        </nav>

        <div className="container">
            {movies.map((movie)=>(
                <Movie data={movie} key={movie.title}/>
            ))}
        </div>
    </>
  )
}

export default Home