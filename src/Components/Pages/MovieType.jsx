import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from './../Card/Card';

const MovieType = () => {
  const [catagory,setCatagory] = useState([]);
  const {type} = useParams();

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
   .then(response=>response.json())
   .then(data=>setCatagory(data.results))
  },[type])

  return (
    <div className='bg-black h-full pb-10'>
      <h1 className='text-white font-bold text-3xl pt-10 mb-10 pl-4 '>
        {
          (type=="top_rated" && "Top Rated On Imdb")||
          (type=="upcoming" && "Upcoming Movies Of 2023")||
          (type=="popular" && "Popular Movies Of 2023")
        }
        </h1>
    {
      catagory.map(movies=>{
        return(<Card movie={movies} key={movies.id}/>
          )
      })
    }
    </div>
  )
}

export default MovieType