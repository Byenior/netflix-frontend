import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { fetchMovies } from "@/lib/api";

export default async function Home() {
  const movies = await fetchMovies();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Header />

      <MainContent />
      <Footer movies={movies} />
    </div>
  );
}
