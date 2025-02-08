export type MovieTypes = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  total_results: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: number;
  name: string;
  department: string;
};

export type Trailer = {
  name: string;
  id: number;
  site: string;
  official: boolean;
  size: number;
};

export type PageType = {
  poster_path: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  adult: boolean;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  genre_ids: number[];
  id: number;
  job: string;
  total_pages: number;
};

export type GenreType = {
  name: string;
  id: number;
  total_results: string;
  results: [];
  genres: [];
  genre_ids: [];
};
