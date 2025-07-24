"use client";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

import { useMainProfile } from "@/store/useProfile";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
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

interface Profile {
  name: string;
  image: string;
  locked?: boolean;
}

export default function MainIndex(props: {
  movies: Movie[];
  profiles: Profile[];
}) {
  const { movies, profiles } = props;

  const { isLoginSubProfile, setIsLoginSubProfile, setImageProfile } =
    useMainProfile();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isLoginSubProfile === false) {
      const subProfile = document.cookie
        .split("; ")
        .find((row) => row.startsWith("subProfile="))
        ?.split("=")[1];

      if (subProfile) {
        const profile = profiles.find((p) => p.name === subProfile);
        if (profile) {
          setIsLoginSubProfile(true);
          setImageProfile(profile.image);
          document.cookie = `subProfile=${profile.name}; max-age=300; path=/`;
          setChecked(true);
        }
      } else {
        setIsLoginSubProfile(false);
        setChecked(true);
      }
    }
  }, [props.profiles]);

  if (checked === false) return null;

  console.log("isLoginSubProfile:", isLoginSubProfile);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full">
      {isLoginSubProfile === false && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-90 z-20 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-grey-900 gap-[30px]">
            <div>
              <p className="text-white text-5xl">เลือกผู้ชม</p>
            </div>
            <div className="flex gap-4">
              {profiles.map((profile) => (
                <ProfileCard key={profile.name} {...profile} />
              ))}
            </div>
          </div>
        </div>
      )}
      {isLoginSubProfile === true && (
        <>
          <Header />
          <MainContent />
          <Footer movies={movies} />
        </>
      )}
    </div>
  );
}
