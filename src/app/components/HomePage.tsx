import { UpComingMovies } from "./UpComingMovies";
import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRatedMovies";
import { TitlesSeeMore } from "./TitlesSeeMore";
import { BottomNews } from "./BottomNews";

export const HomePage = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center">
        <TitlesSeeMore name="Upcoming" />
        <UpComingMovies />
        <TitlesSeeMore name="Popular" />
        <PopularMovies />
        <TitlesSeeMore name="Top Rated" />
        <TopRatedMovies />
      </div>
      <BottomNews />
    </div>
  );
};
