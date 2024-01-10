import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const IMG_PATH= 'https://image.tmdb.org/t/p/w1280'
  return (
    <>
        <div className="movie">
            <img src={IMG_PATH + props.data.poster_path} alt="" />
            <Link to={`/details/${props.data.id}`}><h2>{props.data.title}</h2></Link>
        </div>
    </>
  )
}

export default Movie