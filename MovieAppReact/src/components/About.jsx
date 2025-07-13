import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-6 max-w-lg shadow-md rounded-lg text-center relative">
       <span className="absolute top-4 -left-3 text-3xl  cursor-pointer">
        <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-3 hover:text-[#6556CD] cursor-pointer"
          ></i>
       </span>
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="text-lg mb-4">
        Welcome to Showpedia, your ultimate destination for discovering the latest and greatest movies.
        Our platform provides real-time updates on trending and popular movies, complete with detailed
        information, ratings, and reviews.
      </p>
      <p className="text-lg mb-4">
        Showpedia is designed for movie enthusiasts who want to stay updated on new releases, explore
        different genres, and find hidden gems. Whether you are a fan of action, drama, horror, or
        romance, we have something for everyone.
      </p>
      <p className="text-lg">
        Features of Showpedia:
        <ul className="list-disc list-inside text-left mx-auto mt-2">
          <li>Real-time movie updates</li>
          <li>Detailed descriptions and ratings</li>
          <li>Personalized watchlists</li>
          <li>Advanced search and filter options</li>
          <li>Community-driven reviews and discussions</li>
        </ul>
      </p>
    </div>
  );
};

export default About;