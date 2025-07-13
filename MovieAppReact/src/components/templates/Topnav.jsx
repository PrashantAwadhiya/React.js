import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../utils/Axios";
import noImage from "/no_image.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);
  const { id } = useParams();

  const GetSearches = async () => {
    if (query.trim() === "") {
      setSearches([]);
      return;
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.error("Error fetching searches:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      GetSearches();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="w-full h-[10vh]  relative flex items-center justify-center px-5 py-3">
     <div className="flex items-center justify-start px-4 border-2 border-[#6656cdd7] rounded-xl text-white gap-2 w-[600px] h-full">
       <i className="text-xl ri-search-line text-zinc-300"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="p-2 border-none w-full text-white font-bold outline-none"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl ri-close-fill cursor-pointer text-zinc-400"
        ></i>
      )}

      <div className="w-[90%] md:w-[47%] max-h-[50vh] z-30 absolute top-[97%] left-84 overflow-auto bg-zinc-200">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="text-zinc-600 font-semibold justify-start items-center p-4 md:p-10 flex w-[100%] border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[8vh] md:w-[10vh] shadow-xl h-[8vh] md:h-[10vh] object-cover rounded mr-3 md:mr-5"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span className="text-sm md:text-base">
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Topnav;