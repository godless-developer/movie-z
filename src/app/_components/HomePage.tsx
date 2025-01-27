import { UpComingMovies } from "./UpComingMovies";
import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRatedMovies";

import { Hero } from "./Hero";

export const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Hero />
        <UpComingMovies />
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
};
