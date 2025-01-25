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
    <div className=" mx-auto flex items-start content-start gap-8 self-stretch flex-wrap w-full max-w-[1290px] h-[910px]">
      {data.results.slice(0, 10).map((movie) => (
        <div className="rounded-[8px] overflow-hidden w-[230px] h-[439px] flex flex-col items-start cursor-pointer">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={`Poster of ${movie?.original_title}`}
            width={500}
            height={750}
          />
          <div className="bg-[#27272a] flex p-2 flex-col items-start self-stretch h-full">
            <div className="flex gap-[2px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66658 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z"
                  fill="yellow"
                  stroke="yellow"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                {movie?.vote_average.toFixed(1)}
                <span className="text-[#71717a] text-[12px]">/10</span>{" "}
              </p>
            </div>
            <p>{movie?.original_title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
