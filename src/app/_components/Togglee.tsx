"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { Genres, MovieTypes } from "../utils/types";

export function ToggleGroupDemo({
  genres,
}: {
  genres: { id: string; name: string }[];
}) {
  const { push } = useRouter();
  const handleClick = (selectedGenreIds: string[]) => {
    push(`/genres/14?genresId=${selectedGenreIds}`);
  };
  return (
    <ToggleGroup
      type="multiple"
      onValueChange={handleClick}
      className="w-[400px] flex-wrap h-full justify-start"
    >
      {genres?.map((genre: Genres, index: number) => {
        return (
          <ToggleGroupItem
            className="px-2 h-[30px]"
            key={genre.id}
            value={genre.id.toString()}
            aria-label="Toggle bold"
            variant={"outline"}
          >
            {genre.name}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
