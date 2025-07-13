import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-full md:w-[18%] h-full border-r-2 border-zinc-400 px-3 md:px-4 py-5 bg-[#1F1E24]">
      <span >
        <img src="../public/logo1.png" alt="" className=" h-24" />
      </span>

      <nav className="flex flex-col text-zinc-300 text-xl gap-2 ">
        <h1 className="font-bold text-white text-xl mt-5 mb-1 ml-2" style={{ textShadow: '0 0 1px #fff' }}>New Feeds</h1>
        <Link to="/trending" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-bar-chart-fill mr-2"></i> Popular
        </Link>
        <Link to="/movie" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-movie-2-fill mr-2"></i> Movies
        </Link>
        <Link to="/tv" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-tv-fill mr-2"></i> Tv Shows
        </Link>
        <Link to="/person" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-team-fill mr-2"></i> People
        </Link>
      </nav>
      <hr className="border-zinc-400 mt-2" />
      <nav className="flex flex-col text-zinc-300 text-xl gap-2">
        <h1 className="font-bold text-white text-xl mt-5 mb-2 ml-2" style={{ textShadow: '0 0 1px #fff' }}>Website Information</h1>
        <Link to="/about" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link to="/contact" className="p-3 md:p-3 rounded-lg hover:bg-[#6556CD] hover:text-white duration-300">
          <i className="ri-phone-fill mr-2"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;