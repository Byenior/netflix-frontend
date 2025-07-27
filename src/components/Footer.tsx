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
  console.log("Footer movies:", movies);
  return (
    <>
      <footer
        className="hidden md:block mt-4 bottom-0 fixed w-full p-4"
        style={{ paddingLeft: "50px" }}
      >
        <h1 className="text-white mb-4 font-bold">Popular on Netflix</h1>
        <MovieSwiper movies={movies} />
      </footer>

      <footer
        className=" md:hidden mt-4 bottom-0 fixed w-full p-4 h-60"
        style={{
          background:
            "linear-gradient(0deg,rgba(0, 0, 0, 1) 70%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <h1 className="text-white mb-4 font-bold">Popular on Netflix</h1>
        <MovieSwiper movies={movies} />
      </footer>
    </>
  );
}
