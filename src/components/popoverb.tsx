import { TOKEN } from "@/app/utils/constants";
import { Genres } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export async function PopoverDemo() {
  const popData = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await popData.json();
  console.log(data);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[99px] h-[39px] px-2 py-4 border-[1px] rounded-[6px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              stroke="#FAFAFA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[14px] normal font-medium text-20px">Genre</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[577px] h-[auto] ml-[505px] mt-5">
        <div className="grid gap-4 ">
          <div className="space-y-2 border-solid border-b-stone-400 border-b-[1px] pb-[10px]">
            <h4 className="font-semibold text-2xl">Genres</h4>
            <p className="text-[15px]">See lists of movies by genre</p>
          </div>
          <div className="flex flex-wrap gap-[18px]">
            {data.genres?.map((movie: Genres, index: number) => {
              return (
                <Link href={`/genres/${movie.id}/`}>
                  <button
                    key={index}
                    className="flex items-center gap-[8px] text-xs rounded-[20px] border-solid border-slate-500 border-[0.2px] px-[10px] py-[2px] font-semibold"
                  >
                    {movie.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
