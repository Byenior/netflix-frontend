"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

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

      setMovieData(movies);
      setIsLoading(false);
    };

    loadMovies();
  }, [movies]);

  const renderSkeletonCards = () =>
    Array.from({ length: 8 }).map((_, i) => (
      <SwiperSlide key={`skeleton-${i}`}>
        <div className="relative">
          <div className="w-[250px] h-[120px] relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer transform -skew-x-12" />

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
      const movie = movieData[i];

      return (
        <SwiperSlide key={`movie-${i}`}>
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            <div className="w-[140px] md:w-[250px] h-[170px] md:h-[120px] relative overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={movie?.imageUrl}
                alt={movie?.title || "Movie"}
                fill
                className="object-cover footer-movie"
                loading="lazy"
                sizes="auto"
              />
            </div>

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
      modules={[FreeMode, Navigation, Pagination]}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumBounce: false,
        sticky: false,
      }}
      resistanceRatio={0}
      watchOverflow={true}
      slidesPerView="auto"
      spaceBetween={5}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;

        swiper.on(
          "setTranslate",
          (swiperInstance: SwiperType, translate: number) => {
            const maxTranslate = swiperInstance.maxTranslate();
            if (translate < maxTranslate) {
              swiperInstance.setTranslate(maxTranslate);
              swiperInstance.updateProgress();
            }
          }
        );
      }}
      style={{ width: "100%", height: "auto" }}
    >
      {isLoading ? renderSkeletonCards() : renderMovieCards()}
    </Swiper>
  );
}
