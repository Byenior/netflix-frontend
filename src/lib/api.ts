const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Movie {
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

export async function fetchMovies(): Promise<Movie[]> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const link = API_URL + "/movie/list-movies";

    const response = await fetch(link, {
      next: { revalidate: 3600 }, // revalidate ทุก 1 ชั่วโมง
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.movies || data;
  } catch (error) {
    console.error("Error fetching movies:", error);

    // Return fallback data
    return getFallbackMovies();
  }
}

function getFallbackMovies(): Movie[] {
  return [
    // ... fallback movie data
  ];
}
