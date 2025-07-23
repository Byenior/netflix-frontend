import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import MovieSwiper from "@/components/MovieSwiper";

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
  const API_URL = process.env.API_URL || "http://localhost:10000";

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
    return [
      {
        id: 1,
        title: "Movie 1",
        description: "Description for Movie 1",
        genre: "Drama",
        releaseYear: 2020,
        duration: 150,
        imageUrl: "/footer/Card1.png",
        videoUrl: "/movie1.mp4",
        rating: 7.5,
      },
      {
        id: 2,
        title: "Movie 2",
        description: "Description for Movie 2",
        genre: "Comedy",
        releaseYear: 2019,
        duration: 90,
        imageUrl: "/footer/Card2.png",
        videoUrl: "/movie2.mp4",
        rating: 6.5,
      },
      {
        id: 3,
        title: "Movie 3",
        description: "Description for Movie 3",
        genre: "Horror",
        releaseYear: 2022,
        duration: 110,
        imageUrl: "/footer/Card3.png",
        videoUrl: "/movie3.mp4",
        rating: 9.0,
      },
      {
        id: 4,
        title: "Movie 4",
        description: "Description for Movie 4",
        genre: "Action",
        releaseYear: 2021,
        duration: 120,
        imageUrl: "/footer/Card4.png",
        videoUrl: "/movie4.mp4",
        rating: 8.0,
      },
      {
        id: 5,
        title: "Movie 5",
        description: "Description for Movie 5",
        genre: "Sci-Fi",
        releaseYear: 2023,
        duration: 140,
        imageUrl: "/footer/Card5.png",
        videoUrl: "/movie5.mp4",
        rating: 7.8,
      },
      {
        id: 6,
        title: "Movie 6",
        description: "Description for Movie 6",
        genre: "Romance",
        releaseYear: 2021,
        duration: 120,
        imageUrl: "/footer/Card6.png",
        videoUrl: "/movie6.mp4",
        rating: 8.5,
      },
      {
        id: 7,
        title: "Movie 7",
        description: "Description for Movie 7",
        genre: "Thriller",
        releaseYear: 2020,
        duration: 130,
        imageUrl: "/footer/Card7.png",
        videoUrl: "/movie7.mp4",
        rating: 6.8,
      },
      {
        id: 8,
        title: "Movie 8",
        description: "Description for Movie 8",
        genre: "Documentary",
        releaseYear: 2021,
        duration: 90,
        imageUrl: "/footer/Card8.png",
        videoUrl: "/movie8.mp4",
        rating: 7.2,
      },
      {
        id: 9,
        title: "Movie 9",
        description: "Description for Movie 9",
        genre: "Animation",
        releaseYear: 2022,
        duration: 100,
        imageUrl: "/footer/Card9.png",
        videoUrl: "/movie9.mp4",
        rating: 8.3,
      },
      {
        id: 10,
        title: "Movie 10",
        description: "Description for Movie 10",
        genre: "Fantasy",
        releaseYear: 2023,
        duration: 115,
        imageUrl: "/footer/Card10.png",
        videoUrl: "/movie10.mp4",
        rating: 9.1,
      },
      {
        id: 11,
        title: "Movie 11",
        description: "Description for Movie 11",
        genre: "Mystery",
        releaseYear: 2020,
        duration: 125,
        imageUrl: "/footer/Card11.png",
        videoUrl: "/movie11.mp4",
        rating: 7.9,
      },
      {
        id: 12,
        title: "Movie 12",
        description: "Description for Movie 12",
        genre: "Adventure",
        releaseYear: 2021,
        duration: 135,
        imageUrl: "/footer/Card12.png",
        videoUrl: "/movie12.mp4",
        rating: 8.1,
      },
      {
        id: 13,
        title: "Movie 13",
        description: "Description for Movie 13",
        genre: "Crime",
        releaseYear: 2022,
        duration: 145,
        imageUrl: "/footer/Card13.png",
        videoUrl: "/movie13.mp4",
        rating: 6.7,
      },
      {
        id: 14,
        title: "Movie 14",
        description: "Description for Movie 14",
        genre: "Western",
        releaseYear: 2023,
        duration: 155,
        imageUrl: "/footer/Card14.png",
        videoUrl: "/movie14.mp4",
        rating: 8.4,
      },
      {
        id: 15,
        title: "Movie 15",
        description: "Description for Movie 15",
        genre: "Musical",
        releaseYear: 2020,
        duration: 165,
        imageUrl: "/footer/Card15.png",
        videoUrl: "/movie15.mp4",
        rating: 7.6,
      },
    ];
  }
}

// Server Component (ไม่ต้องใช้ "use client")
export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Header />
      <MainContent />
      <Footer movies={movies} />
    </div>
  );
}
