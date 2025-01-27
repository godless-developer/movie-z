export type Genre = {
  id: number;
  name: string;
};

export type MovieTypes = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: number;
  name: string;
  department: string;
};
export type Genres = {
  name: string;
  id: number;
};
export type Trailer = {
  name: string;
  id: number;
  site: string;
  official: boolean;
  size: number;
};
