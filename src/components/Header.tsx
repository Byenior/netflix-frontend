"use client";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { useMainProfile } from "@/store/useProfile";
import Link from "next/dist/client/link";
export default function Header() {
  const { imageProfile } = useMainProfile();

  return (
    <header
      className="p-4 fixed top-0 w-full flex justify-between z-10"
      style={{ paddingLeft: "50px" }}
    >
      <div className="text-white gap-[20px] flex items-center">
        <Link href={""} className="flex items-center">
          <Image
            src="/NetflixLogo.png"
            alt="Netflix Logo"
            width={100}
            height={100}
          />
        </Link>
        <Link href={""}>Home</Link>
        <Link href={""}>TV Shows</Link>
        <Link href={""}>Movies</Link>
        <Link href={""}>New & Popular</Link>
        <Link href={""}>My List</Link>
        <Link href={""}>Browse by Languages</Link>
      </div>

      <div className="text-white gap-[20px] flex items-center">
        <div>
          <FaMagnifyingGlass />
        </div>
        <div>Kids</div>
        <div>
          <FaBell />
        </div>
        <div className="flex items-center gap-1">
          <Image src={imageProfile} alt="Profile" width={40} height={40} />

          <IoMdArrowDropdown />
        </div>
      </div>
    </header>
  );
}
