"use client";
import Image from "next/image";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { useMainProfile } from "@/store/useProfile";
import { minify } from "next/dist/build/swc/generated-native";

interface ProfileCardProps {
  name: string;
  image: string;
  locked?: boolean;
}

export default function ProfileCard({ name, image, locked }: ProfileCardProps) {
  const [hover, setHover] = useState(false);

  const { setImageProfile, setIsLoginSubProfile } = useMainProfile();
  return (
    <div
      className="flex flex-col items-center"
      style={{
        fontSize: "larger",
        gap: "20px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (!locked) {
          setImageProfile(image);
          setIsLoginSubProfile(true);

          document.cookie = `subProfile=${name}; max-age=300; path=/`;
        }
      }}
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="square-full"
        style={{
          border: hover ? "2px solid white" : "2px solid transparent",
          transition: "border 0.2s",
          //   padding: "10px",
          borderRadius: "16px",
        }}
      />
      <p style={{ color: hover ? "white" : "grey", transition: "color 0.2s" }}>
        {name}
      </p>
      {locked && <CiLock color={hover ? "white" : "grey"} />}
    </div>
  );
}
