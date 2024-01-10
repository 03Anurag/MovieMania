import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { FaStar } from "react-icons/fa";

const Details = () => {
    const [detail , setDetail] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    const IMG_URL = "https://image.tmdb.org/t/p/w1280/";

    async function showDetails(id){
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b760080de10e3e37846e8366ded67d02`);
        const data = await res.json();

        setDetail(data);
    }

    useEffect(()=>{
        showDetails(id);
    },[])
  return (
    <>
        <header>
            <h1>MovieMania</h1>
            <button onClick={()=> navigate('/')}>Back To Home</button>
        </header>

        {detail=== undefined ? <h1 style={{color:"White"}}>Loading...</h1> : <div className="container-2" style={{backgroundImage:`url(${IMG_URL + detail.backdrop_path})`}}>
            <div className="left">
                <img src={IMG_URL + detail.poster_path} alt="" />
            </div>
            <div className="right">
                <h1>{detail.title}</h1>
                <div className='rating'><FaStar style={{fontSize:"1.2rem", marginRight:"5px", color:"#f1c40f"}}/><h3>{(detail.vote_average).toFixed(1)}/10</h3></div>
                <h3>Release Date:-{detail.release_date}</h3>
                <p>{detail.overview}</p>

                <div>
                    <h2>Genres</h2>
                    <ul>
                        {detail.genres.map((genre)=>(
                            <li>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>}
    </>
  )
}

export default Details