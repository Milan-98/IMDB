import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import MovieType from './MovieType';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(response=>response.json())
    .then(data=>setPopularMovies(data.results))
  }
  ,[])

  return (
    <div className='poster bg-black'>

    <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false} >
{
  popularMovies.map(movie=>{
    return(

      <Link to={`movie/${movie.id}`} key={movie.id}>
       <img  src={` https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
      </Link>
    )
  })} 
  </Carousel>

  <h1 className='text-white font-bold text-2xl mb-[-2rem] mt-10 ml-5'>Popular Of This Month</h1>


 <MovieType/>
  

    </div>
  )
}

export default Home