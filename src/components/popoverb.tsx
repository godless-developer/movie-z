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
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[577px] h-[auto] ml-[505px] mt-5">
        <div className="grid gap-4 ">
          <div className="space-y-2 border-solid border-b-stone-400 border-b-[1px] pb-[10px]">
            <h4 className="font-semibold text-2xl">Genres</h4>
            <p className="text-sm text-muted-foreground">
              See lists of movies by genre
            </p>
          </div>
          <div className="flex flex-wrap gap-[18px]">
            {data.genres?.map((movie: Genres, index: number) => {
              return (
                <button
                  key={index}
                  className="flex items-center gap-[8px] text-xs rounded-[20px] border-solid border-slate-500 border-[0.2px] px-[10px] py-[2px] font-semibold"
                >
                  {movie.name}
                </button>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
