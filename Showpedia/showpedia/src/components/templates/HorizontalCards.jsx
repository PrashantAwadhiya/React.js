import React from "react";
import { Link } from "react-router-dom";
import noImage from "/no_image.jpg";

const HorizontalCards = ({ data }) => {
  
  
  // Endless sliding logic
  const [offset, setOffset] = React.useState(0);
  const cardWidth = 250; // px, approximate width of each card
  const gap = 16; // px, space-x-4
  const totalWidth = (cardWidth + gap) * data.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        if (Math.abs(prev) >= totalWidth) {
          return 0;
        }
        return prev - 1; // slower speed of sliding
      });
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [totalWidth]);

  // Duplicate cards for seamless loop
  const cards = [...data, ...data];

  return (
    <div className="cards w-full h-72 flex p-2 overflow-hidden relative" role="list">
      <div
        className="flex space-x-4"
        style={{
          width: `${cards.length * (cardWidth + gap)}px`,
          transform: `translateX(${offset}px)`,
          transition: 'none',
        }}
      >
        {cards.map((d, i) => (
          <Link
            key={i}
            to={`/${d.media_type}/details/${d.id}`}
            className="relative min-w-[250px] h-full rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            role="listitem"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-102"
              src={d.poster_path ? `https://image.tmdb.org/t/p/w500/${d.poster_path}` : noImage}
              alt={d.title || d.name || 'Movie Poster'}
            />
            <span className="absolute w-full p-2 h-auto transform bottom-[-100%] group-hover:bottom-0 duration-500 backdrop-blur-xl ">
              <h1 className="text-white text-lg font-bold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-white text-sm mt-2 flex items-center">
                <i className="ri-star-fill text-yellow-400 mr-1 "></i> {d.vote_average?.toFixed(1)} / 10
                <span className='ml-6'>
                  <i className="ri-movie-line text-yellow-400 mr-1"></i>
                  {d.media_type?.toUpperCase()}
                </span>
              </p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
