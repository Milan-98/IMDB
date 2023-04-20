import React from "react";
import { Link } from "react-router-dom";
import IMDB from "../Assets/IMDB.png";

const Header = () => {
  return (
    <div className=" flex h-16 items-center justify-between bg-[#121212]   font-semibold  text-[#f0f0f0]">
      <Link to="/">
        <img
          className="md:w-18 ml-3 w-16 md:ml-10 md:mr-96"
          src={IMDB}
          alt=""
        />
      </Link>

      <Link
        to="/movies/popular"
        className="ml-4 md:rounded-full md:border-2 md:px-4 md:py-2 md:hover:bg-zinc-950"
      >
        Popular
      </Link>
      <Link
        to="/movies/top_rated"
        className="mx-3 md:mx-[-20rem] md:rounded-full md:border-2 md:px-4 md:py-2 md:hover:bg-zinc-950"
      >
        Top Rated
      </Link>
      <Link
        to="/movies/upcoming"
        className="mr-5 md:rounded-full md:border-2 md:px-4 md:py-2 md:hover:bg-zinc-950"
      >
        UpComing
      </Link>
    </div>
  );
};

export default Header;
