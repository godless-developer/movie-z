// "use client";
// import { TOKEN } from "@/app/utils/constants";
// import { MovieTypes } from "@/app/utils/types";
// import { Pagination } from "@/components/ui/pagination";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import React, { useState } from "react";
// import { ToggleGroupDemo } from "../_components/Togglee";
// import ganre from "./[genresId]/page";

// export default function Page1() {
//   const [movie, setMovie] = React.useState<any>([]);
//   const [genre, setGenre] = React.useState<{ id: string; name: string }[]>([]);

//   const searchParams = useSearchParams();
//   const genreId = searchParams.get("genreIds");

//   React.useEffect(() => {
//     const responce = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${14}&page=${1}`,
//         {
//           headers: {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const res = await response.json();
//       setMovie(res.results || []);
//       console.log("res", res);
//     };
//     responce();
//   }, [genreId]);

//   React.useEffect(() => {
//     const data = async () => {
//       const responsehuuchin = await fetch(
//         " https://api.themoviedb.org/3/genre/movie/list?language=en",
//         {
//           headers: {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const res = await responsehuuchin.json();
//       setGenre(res.genres || []);
//       console.log(res);
//     };
//     data();
//   }, []);

//   function formatVoteAverage(vote: number) {
//     return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
//   }
//   return (
//     <div className="w-[1440px] h-full flex flex-col items-center  mt-5">
//       <div className="w-[1280px] h-full flex flex-col items-start gap-8">
//         <p className="text-secondary-foreground text-[30px] normal font-semibold ">
//           Search filter
//         </p>
//         <div className="flex items-start self-stretch gap-1 h-full">
//           <div className="w-[387px] flex flex-col items-start gap-5 text-secondary-foreground sticky top-[100px]">
//             <div className="w-[213px] flex flex-col items-start gap-1">
//               <p className="text-[24px] normal font-semibold">Genres</p>
//               <p className="text-[16px] normal font-normal">
//                 See lists of movies by genre
//               </p>
//             </div>
//             <ToggleGroupDemo genres={genre} />
//           </div>
//           <div className="w-[2px] h-[1830px] flex flex-col py-4 gap-[10px] self-stretch ml-8 mr-4 bg-secondary"></div>
//           <div className="w-[806px] flex flex-col items-start gap-8 h-full">
//             <h1 className="flex  items-start gap-2 text-[20px] font-medium ">
//               {movie.total_results}
//               <p>titles</p>
//             </h1>
//             <div className="w-[806px] h-full flex flex-wrap items-start self-stretch gap-8">
//               {movie.slice(0, 20).map((movie: MovieTypes, index: number) => {
//                 return (
//                   <Link key={index} href={`/${movie.id}`}>
//                     <div className="rounded-[8px] overflow-hidden w-[165px] h-[330px] flex flex-col items-start cursor-pointer">
//                       <Image
//                         src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
//                         alt={`Poster of ${movie?.original_title}`}
//                         width={500}
//                         height={750}
//                       />
//                       <div className="bg-secondary flex p-2 flex-col items-start self-stretch h-full">
//                         <div className="flex gap-[2px] items-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 16 16"
//                             fill="none"
//                           >
//                             <path
//                               d="M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66658 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z"
//                               fill="yellow"
//                               stroke="yellow"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                           <p>
//                             {movie?.vote_average.toFixed(1)}
//                             <span className="text-[#71717a] text-[12px]">
//                               /10
//                             </span>
//                           </p>
//                         </div>
//                         <p>{movie.original_title}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//             <Pagination />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default async function page() {
  return <div>b</div>;
}
