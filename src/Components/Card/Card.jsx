import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Card = ({ movie }) => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, []);
  return isLoading ? (
    <div className="relative mx-auto mb-14 h-[28rem]  w-[18rem] animate-pulse space-y-5 overflow-hidden rounded-3xl bg-gray-900  bg-gradient-to-r from-transparent via-gray-600 to-transparent pb-2  shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton hight={40} duration={2} />
        </p>
      </SkeletonTheme>
    </div>
  ) : (
    <Link to={`/movie/${movie.id}`}>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
        className="group  mx-auto mb-14  flex h-[28rem] w-[18rem]  flex-col justify-end rounded-xl  bg-cover bg-center pb-2 text-center font-semibold text-white outline-double outline-[.6rem]  outline-stone-400 duration-300 hover:-translate-y-1 hover:scale-110 hover:outline-offset-4 "
      >
        <h1 className="ml-1 hidden text-start font-semibold md:group-hover:block">
          {Math.round(movie.vote_average * 10) / 10} ⭐
        </h1>
        <h1 className="mb-2 ml-1 hidden text-start text-sm font-light md:group-hover:block ">
          {movie.release_date}
        </h1>
        <h1 className="ml-1 hidden text-start text-xs md:group-hover:block  ">
          {movie.overview}
        </h1>
      </div>
    </Link>
  );
};

export default Card;
