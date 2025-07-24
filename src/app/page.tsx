// component
import MainIndex from "@/components/MainIndex";

// api
import { fetchMovies } from "@/lib/api";

export default async function Home() {
  // login
  // const user = await loginUser();

  // login - sub user
  // const subUser = await loginSubUser();

  // fetch movies
  const movies = await fetchMovies();

  const profiles = [
    { name: "Po", image: "/Po.avif", locked: false },
    { name: "Tinky Winky", image: "/Tinkywinky.avif", locked: true },
    { name: "Dipsy", image: "/Dipsy.avif", locked: true },
    { name: "Laa Laa", image: "/LaaLaa.avif", locked: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MainIndex movies={movies} profiles={profiles} />
    </div>
  );
}
