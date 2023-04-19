import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../Card/Card';


const Movie = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState({});
  const [genres,setGenres] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(response=>response.json())
    .then(data=>setMovie(data))
  },[])


  return (
    <div>
      <img className='' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
      <img className='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
    <h1>{movie.original_title}</h1>
    <h1>{movie.tagline}</h1>
    <h1>{movie.vote_average}⭐({movie.vote_count}) Votes</h1>
    <h1>{movie.runtime} mins</h1>
    <h1>Release Date:{movie.release_date}</h1>
    <ul>
      {movie.genres ?
        movie.genres.map((i,j)=><li key={j}>{i.name}</li>):" "
      }
    </ul>
    <h1>Synopsis</h1>
    <h1>{movie.overview}</h1>
    <button><a href={movie.homepage}>Movie HomePage</a></button>
    <h1>production companies</h1>
    <ul>
    {

      movie.production_companies ?
      movie.production_companies.map(i=>{
        return(
          <li key={i.id}>
            <img src={`https://image.tmdb.org/t/p/original/${i.logo_path}`} />
            <span>{i.name}</span>
            </li>
          )
        }) : " "
    }
   </ul>
    </div>
  )
}

export default Movie