import { UpComingMovies } from "./UpComingMovies";
import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRatedMovies";
import { TitlesSeeMore } from "./TitlesSeeMore";
import { BottomNews } from "./BottomNews";
import { Header } from "./Header";
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
      <BottomNews />
    </div>
  );
};
