import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/templates/Trailer";
import Contact from "./components/Contact";
import About from "./components/About";
const App = () => {
  return (
    <div
      className="bg-transparent select-none overflow-x-hidden flex text-white w-screen h-screen"
      style={{
        backgroundImage: "url('../public/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
        backdropFilter: "blur(5px)",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} > 
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route> 
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
        <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
          
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />


      </Routes>
    </div>
  );
};

export default App;
