export interface MovieDto {
  id: number;
  title: string;
  description?: string;
  genre?: string;
  releaseYear?: number;
  duration?: number;
  imageUrl?: string;
  videoUrl?: string;
  rating?: number;
}
