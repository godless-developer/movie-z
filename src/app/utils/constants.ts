export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDljNTI3YTgyYzcyMGZjMzQ0YTk4MDZjZWVkMGNiZiIsIm5iZiI6MTcyODI2NzY3NS43ODg5OCwic3ViIjoiNjZmMGNkZjFjMjM3MjU4ZTRjMjY2ZmU2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5SwnTBOIkGmb6vAvSTVyB7ZIu9SczsYxEwnJVcW0wmQ";

export const BaseURL = "https://api.themoviedb.org/3";

export const ConImg = "https://image.tmdb.org/t/p/";

const Option = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
};
export default Option;
