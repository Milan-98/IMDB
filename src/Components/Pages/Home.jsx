import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieType from "./MovieType";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="poster bg-black">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        className="md:hidden"
      >
        {popularMovies.map((movie) => {
          return (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <img
                src={` https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                alt=""
              />
            </Link>
          );
        })}
      </Carousel>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        className="hidden md:block "
      >
        {popularMovies.map((movie) => {
          return (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <img
                src={` https://image.tmdb.org/t/p/original/${
                  movie && movie.backdrop_path
                }`}
                alt=""
              />
              <div className="absolute left-10 top-[29rem] w-[50vw] text-start text-white">
                <h1 className="text-5xl font-bold">{movie.original_title}</h1>
                <h1 className="ml-1 mt-2 text-2xl font-semibold">
                  {Math.round(movie.vote_average * 10) / 10}⭐
                </h1>
                <h1 className="ml-1 mt-1 text-xl font-light ">
                  {movie.release_date}
                </h1>

                <h1 className="ml-1 mt-2 ">{movie.overview}</h1>
              </div>
            </Link>
          );
        })}
      </Carousel>

      <h1 className="mb-[-2rem] ml-3 mt-6 text-2xl font-bold text-white md:mt-12 md:text-4xl">
        Popular Of This Month
      </h1>

      <MovieType />
    </div>
  );
};

export default Home;
