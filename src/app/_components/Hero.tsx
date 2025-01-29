import { ConImg, TOKEN } from "../utils/constants";
import { fetchData } from "./Genre";
import { MovieTypes } from "../utils/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export const Hero = async () => {
  const hero = "/movie/now_playing?language=en-US&page=1";
  const heroMovies = await fetchData(hero);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${heroMovies.results.map(
      (movie: MovieTypes) => movie.id
    )}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const comeTrailer = await response.json();
  return (
    <div className="mt-[0px]">
      <div className="  flex flex-wrap gap-6 justify-center mt-6 w-[100vw]">
        <Carousel className="w-full h-[600px]">
          <CarouselContent>
            {heroMovies.results
              .slice(0, 10)
              .map((movie: MovieTypes, index: number) => {
                return (
                  <div key={index}>
                    <CarouselItem className="relative">
                      <Link href={`/${movie.id}`}>
                        <div
                          className="w-[100vw] h-[600px] relative"
                          style={{
                            backgroundImage: `url(${
                              ConImg + "original" + movie?.backdrop_path
                            }) `,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className=" w-[100vw] h-[600px] bg-[#000]/20 absolute"></div>

                          <div className=" left-[140px] top-[178px] absolute ">
                            <h3 className="text-4 text-white font-[400] leading-[24px] ">
                              Now Playing:
                            </h3>
                            <h1 className="text-[36px] text-[#fff] font-[700] leading-[40px] ">
                              {movie?.original_title}
                            </h1>
                            <div className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 28 28"
                                fill="none"
                              >
                                <path
                                  d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16658 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z"
                                  fill="yellow"
                                  stroke="yellow"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <h3 className="text-[18px] font-[600] leading-[28px] text-[#fafafa] ">
                                {movie?.vote_average.toFixed(1)}
                                <span className="text-[#71717A] font-[400] text-[16px] leading-[24px] ">
                                  /10
                                </span>
                              </h3>
                            </div>
                            <div className="text-[12px] leading-[16px] text-[#fafafa] w-[302px] mt-[16px] ">
                              {movie?.overview}
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="absolute top-[400px] left-[155px]"
                            variant="outline"
                          >
                            watch trailer
                          </Button>
                        </DialogTrigger>
                        <DialogTitle hidden></DialogTitle>
                        <DialogContent>
                          <iframe
                            src={`https://www.youtube.com/embed/${comeTrailer.results[0].key}`}
                            width={450}
                            height={261}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title={comeTrailer.results[0].name}
                            allowFullScreen
                          ></iframe>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  </div>
                );
              })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[44px] " />
          <CarouselNext className="absolute right-[44px] " />
        </Carousel>
      </div>
    </div>
  );
};
