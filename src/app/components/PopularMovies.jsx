import Image from "next/image";
import { TOKEN } from "../utils/constants";

export const PopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return (
    <div className="  flex items-start content-start gap-8 self-stretch flex-wrap w-full max-w-[1290px] h-[910px] ">
      {data.results.slice(0, 10).map((movie) => (
        <div className="rounded-[8px] overflow-hidden w-[230px] h-[439px] flex flex-col items-start cursor-pointer">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={`Poster of ${movie?.original_title}`}
            width={500}
            height={750}
          />
          <div className="bg-[#27272a] flex p-2 flex-col items-start self-stretch  h-full">
            <p>
              {movie?.vote_average.toFixed(1)}
              <span className="text-[#71717a] text-[12px]">/10</span>{" "}
            </p>
            <p>{movie?.original_title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
