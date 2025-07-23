"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

interface MovieSwiperProps {
  movies: Movie[];
}

export default function MovieSwiper({ movies }: MovieSwiperProps) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const swiperRef = useRef<SwiperType>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:10000";
  const imageUrl = `${apiUrl}/images/movies`;
  // http://localhost:10000/images/movies"

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // จำลองการดึง API
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);

      // จำลองเวลาในการดึง API (2-3 วินาที)
      await new Promise((resolve) => setTimeout(resolve, 100));

      setMovieData(movies);
      setIsLoading(false);
    };

    loadMovies();
  }, [movies]);

  // Render Skeleton Cards
  const renderSkeletonCards = () =>
    Array.from({ length: 8 }).map((_, i) => (
      <SwiperSlide key={`skeleton-${i}`}>
        <div className="relative">
          <div className="w-[250px] h-[120px] relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer transform -skew-x-12" />

            {/* Text Skeleton */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <div className="h-3 bg-gray-300/60 rounded mb-1 w-3/4 animate-pulse" />
              <div className="h-2 bg-gray-300/40 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));

  // Render Movie Cards
  const renderMovieCards = () =>
    Array.from({ length: movieData.length }).map((_, i) => {
      const movie = movieData[i % movieData.length];

      return (
        <SwiperSlide key={`movie-${i}`}>
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            <div className="w-[250px] h-[120px] relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={imageUrl + "/" + movie?.imageUrl}
                alt={movie?.title}
                fill
                className="object-cover footer-movie"
                loading="lazy"
                sizes="250px"
              />
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              <h3 className="text-white text-sm font-semibold">
                {movie?.title}
              </h3>
              <p className="text-gray-300 text-xs">
                {movie?.genre} • {movie?.releaseYear}
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={width / 250 ? Math.floor(width / 250) : 5}
      modules={[Navigation, Pagination]}
      style={{ width: "calc(100% + 250px)", height: "auto" }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {isLoading ? renderSkeletonCards() : renderMovieCards()}
    </Swiper>
  );
}
