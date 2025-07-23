"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";

export default function MovieSkeleton() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

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

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={width / 250 ? Math.floor(width / 250) : 5}
      modules={[Navigation, Pagination]}
      style={{ width: "calc(100% + 250px)", height: "auto" }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SwiperSlide key={i}>
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            {/* Skeleton Image - ขนาดเท่ากับ MovieSwiper */}
            <div className="w-[250px] min-w-[250px] h-[120px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg animate-pulse overflow-hidden relative">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer transform -skew-x-12" />
            </div>

            {/* Bottom Gradient - เหมือน MovieSwiper */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              {/* Title Skeleton */}
              <div className="h-3 bg-gray-300/60 rounded mb-1 w-3/4 animate-pulse" />
              {/* Genre & Year Skeleton */}
              <div className="h-2 bg-gray-300/40 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
