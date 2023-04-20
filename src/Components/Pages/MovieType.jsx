import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "./../Card/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieType = () => {
  const [catagory, setCatagory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setCatagory(data.results));
  }, [type]);

  useState(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="h-full bg-black pb-10">
      {isLoading ? (
        <div className="relative  mb-10  animate-pulse  space-y-5 overflow-hidden rounded-3xl  bg-gray-900 bg-gradient-to-r from-transparent via-gray-600 to-transparent  shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton hight={2} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <h1 className=" mb-10 bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text pl-3  pt-10  text-2xl font-extrabold text-transparent md:text-4xl ">
          {(type == "top_rated" && "Top Rated On Imdb") ||
            (type == "upcoming" && "Upcoming Movies Of 2023") ||
            (type == "popular" && "Popular Movies Of 2023")}
        </h1>
      )}
      <div className="md:grid-items-center md:grid md:grid-cols-4">
        {catagory.map((movies) => {
          return <Card movie={movies} key={movies.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieType;
