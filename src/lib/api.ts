const API_URL = process.env.API_URL || "http://localhost:10000";

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
    const response = await fetch(API_URL + "/movie/movies-16", {
      next: { revalidate: 3600 }, // Cache for 1 hour
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
