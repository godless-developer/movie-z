import { UpComingMovies } from "./UpComingMovies";
import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRatedMovies";
import { TitlesSeeMore } from "./TitlesSeeMore";
import { Hero } from "./Hero";

export const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Hero />
        <TitlesSeeMore name="Upcoming" />
        <UpComingMovies />
        <TitlesSeeMore name="Popular" />
        <PopularMovies />
        <TitlesSeeMore name="Top Rated" />
        <TopRatedMovies />
      </div>
    </div>
  );
};
