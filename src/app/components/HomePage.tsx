import { UpComingMovies } from "./UpComingMovies";
import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRatedMovies";
import { TitlesSeeMore } from "./TitlesSeeMore";

export const HomePage = () => {
  return (
    <div className="text-white">
      <TitlesSeeMore name="Upcoming" />
      <UpComingMovies />
      <TitlesSeeMore name="Popular" />
      <PopularMovies />
      <TitlesSeeMore name="Top Rated" />
      <TopRatedMovies />
    </div>
  );
};
