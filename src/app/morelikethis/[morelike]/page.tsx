import Link from "next/link";
import Image from "next/image";
import { TOKEN } from "@/app/utils/constants";
import { MovieTypes } from "@/app/utils/types";

export default async function ({
  params: { morelike },
}: {
  params: { morelike: string };
}) {
  const MoreThisLike = await fetch(
    `https://api.themoviedb.org/3/movie/${morelike}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const MoreThis = await MoreThisLike.json();
  console.log(MoreThis);
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="w-[1090px] h-14 ">
        <p className="text-[24px]">More Like This</p>
      </div>
      <div className="flex gap-4 flex-wrap w-[1090px]">
        {MoreThis.results
          ?.slice(0, 10)
          .map((movie: MovieTypes, index: number) => {
            return (
              <Link href={`/${movie.id}`}>
                <div
                  key={index}
                  className="rounded-[8px] overflow-hidden w-[205px] h-[400px] flex flex-col items-start cursor-pointer"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={`Poster of ${movie?.original_title}`}
                    width={500}
                    height={750}
                  />
                  <div className="bg-[#27272a] flex p-2 flex-col items-start self-stretch h-full">
                    <div className="flex items-center gap-[2px]">
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
                        <span className="text-[#71717a] text-[12px]">/10</span>
                      </p>
                    </div>
                    <p>{movie?.original_title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
