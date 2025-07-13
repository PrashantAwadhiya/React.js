import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // Accepts either a single object or an array
  const items = Array.isArray(data) ? data : [data];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % items.length);
      }, 4000); // 4 seconds
      return () => clearInterval(interval);
    }
  }, [items.length]);

  const currentData = items[current];

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          currentData.backdrop_path || currentData.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 0 5px #fff",
        transition: "background 0.7s ease"
      }}
      className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col justify-end items-start p-5 md:p-10 rounded-lg shadow-lg "
    >
      <h1 className="w-full md:w-[70%] text-3xl md:text-5xl font-black text-white">
        {currentData.original_title || currentData.name || currentData.title || currentData.original_name}
      </h1>
      <p className="w-full md:w-[70%] mt-3 mb-3 text-white text-sm md:text-base lg:text-lg">
        {currentData.overview?.slice(0, 200)}...
        <Link to={`/${currentData.media_type}/details/${currentData.id}`} className="text-blue-400">more</Link>
      </p>
      <p className="text-sm md:text-base lg:text-lg">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {currentData.release_date || "Not Present"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>
        {currentData.media_type?.toUpperCase()}{" "}
      </p>
      <Link to={`/${currentData.media_type}/details/${currentData.id}/trailer`} className="p-2 md:p-4 rounded mt-5 bg-[#6556CD] text-sm md:text-base lg:text-lg">
        Watch Trailer
      </Link>
      {items.length > 1 && (
        <div className="flex gap-2 mt-4">
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full inline-block ${idx === current ? 'bg-white' : 'bg-zinc-500'}`}
              style={{ boxShadow: '0 0 2px #fff' }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;