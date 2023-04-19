import React from 'react'
import {Link} from 'react-router-dom';
import IMDB from '../Assets/IMDB.png'

const Header = () => {
  return (
    <div className=' flex justify-between items-center bg-[#121212] h-14 text-[#f0f0f0]  font-medium'>

     <Link to='/'><img className='w-16 ml-6' src={IMDB} alt="" /></Link>
     <Link to='/movies/popular' className='ml-4'>Popular</Link>
     <Link to='/movies/top_rated' >Top Rated</Link>
     <Link to='/movies/upcoming' className='mr-6'>UpComing</Link>
        
    </div>
  )
}

export default Header