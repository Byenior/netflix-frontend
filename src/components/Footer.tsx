import MovieSwiper from "./MovieSwiper";

interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  releaseYear: number;
  duration: number;
  imageUrl: string;
  videoUrl: string;
  rating: number;
}

interface FooterProps {
  movies: Movie[];
}

export default function Footer({ movies }: FooterProps) {
  return (
    <footer
      className="mt-4 bottom-0 fixed w-full p-4"
      style={{ paddingLeft: "50px" }}
    >
      <h1 className="text-white mb-4">Popular on Netflix</h1>
      <MovieSwiper movies={movies} />
    </footer>
  );
}
