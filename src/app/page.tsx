import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

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

// Server-side data fetching
async function getMovies(): Promise<Movie[]> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:10000";

  try {
    const response = await fetch(API_URL + "/movie/movies-16", {
      // เพิ่ม cache settings สำหรับ Next.js
      next: { revalidate: 3600 }, // revalidate ทุก 1 ชั่วโมง
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.movies || data;
  } catch (error) {
    console.error("Error fetching movies:", error);

    // Fallback data ถ้า API ล้มเหลว
    return [];
  }
}

// Server Component (ไม่ต้องใช้ "use client")
export default async function Home() {
  const movies = await getMovies();
  console.log("Fetched movies:", movies);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Header />
      <MainContent />
      <Footer movies={movies} />
    </div>
  );
}
