import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
    window.scroll(0, 0);
  }, []);
  return (
    <div className="bg-black text-white">
      <img
        className=""
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
      />
      <img
        className="ml-5 mt-[-8rem] w-36 rounded-md md:ml-16 md:mt-[-18rem] md:w-80"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
      />
      <h1 className="ml-5 mt-2  text-2xl font-bold md:absolute  md:left-96 md:top-[52rem] md:text-3xl">
        {movie.original_title}
      </h1>
      <h1 className="bg-red mb-1 ml-5 text-xs md:absolute md:left-96 md:top-[54.1rem] md:pt-2 md:text-sm md:font-normal">
        {movie.tagline}
      </h1>
      <h1 className=" ml-5 font-semibold md:absolute md:left-96 md:top-[55.3rem] md:pt-3 md:text-xl">
        {Math.round(movie.vote_average * 10) / 10} ⭐
        <span className="ml-1   text-xs font-normal md:text-sm">
          ({movie.vote_count}) Votes
        </span>
      </h1>
      <h1 className="ml-5 text-sm font-thin md:absolute md:left-96 md:top-[57.4rem] md:pt-[.3rem]  md:text-base md:font-medium">
        {movie.runtime} mins
      </h1>
      <h1 className="mb-2 ml-5 text-sm font-extralight md:absolute md:left-96 md:top-[59.1rem] md:text-base md:font-normal">
        {movie.release_date}
      </h1>
      <ul className="ml-2 flex flex-wrap gap-1 md:absolute md:left-96 md:top-[61.2rem] md:gap-5 md:pl-2">
        {movie && movie.genres
          ? movie.genres.map((i, j) => (
              <li
                className="rounded-full border px-2 py-1 md:border-2 md:px-3 md:font-medium"
                key={j}
              >
                {i.name}
              </li>
            ))
          : " "}
      </ul>
      <h1 className="ml-2 mt-10  text-2xl font-extrabold text-slate-400 md:mb-5 md:ml-5 md:mt-16  md:text-3xl">
        Synopsis
      </h1>
      <h1 className="mx-2 mt-1 text-sm md:ml-5 md:w-[60rem] md:text-lg">
        {movie.overview}
      </h1>
      <a href={movie.homepage}>
        {" "}
        <button className="mb-10 ml-1 mt-7 rounded-full bg-neutral-900 px-3 py-3 font-semibold md:ml-3 md:mt-16 md:px-6  md:py-4 ">
          Movie HomePage
        </button>
      </a>
      {movie &&
      movie.production_companies &&
      movie.production_companies[0].logo_path ? (
        <h1 className="rounded-full border-b-2 pb-2 text-center text-2xl font-bold text-neutral-300 md:text-3xl">
          Production Companies
        </h1>
      ) : (
        " "
      )}

      <ul className=" mt-14 grid  place-items-center gap-10 text-center text-xl font-semibold text-zinc-500 md:grid-cols-2 md:gap-20 ">
        {movie &&
          movie.production_companies &&
          movie.production_companies &&
          movie.production_companies.map((i) => {
            return (
              <li key={i.id} className="">
                <img
                  src={
                    i.logo_path
                      ? `https://image.tmdb.org/t/p/original/${i.logo_path}`
                      : " "
                  }
                  className="w-60 rounded-lg"
                />
                <h1 className="pt-2">{i.logo_path && i.name}</h1>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movie;
