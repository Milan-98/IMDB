import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

const Card = ({movie}) => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
   setTimeout(()=>{
    setisLoading(false)
   },1500)
  },[])
  return (
    isLoading ?
    <div className=' w-[20rem] mx-auto bg-cover bg-center h-[30rem]  rounded-xl hover:-translate-y-1 hover:scale-110  duration-300 text-white font-semibold text-center flex flex-col justify-end pb-2 mb-10 bg-zinc-700'>

    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton hight={40} duration={2} />
    </p>
  </SkeletonTheme>
    </div>
    :
    <Link to={`/movie/${movie.id}`}>
    <div  style= {{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}} className=' w-[20rem] mx-auto bg-cover bg-center h-[30rem]  rounded-xl hover:-translate-y-1 hover:scale-110  duration-300 text-white font-semibold text-center flex flex-col justify-end pb-2  mb-10 outline-[.6rem] hover:outline-offset-4 outline-stone-400 outline-double ' >

    </div>
    </Link>
    
    
  )
}

export default Card