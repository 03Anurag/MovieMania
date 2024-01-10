import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Movie from './Movie';

const Search = () => {
  const [movies , setMovies] = useState();
  const {id} = useParams();
  const SEARCH='https://api.themoviedb.org/3/search/movie?api_key=b760080de10e3e37846e8366ded67d02&query="';

  useEffect(()=>{
    fetch(SEARCH + id)
    .then((res)=> res.json())
    .then((data)=>{
      setMovies(data.results)
    })
  },[])
  return (
    <>
      {<div className="container">
        {movies?.map((movie)=>(
          <Movie data={movie} key={movie.title}/>
        ))}
      </div>}
    </>
  )
}

export default Search