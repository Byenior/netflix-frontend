"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useMainProfile } from "@/store/useProfile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCastConnected } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const { imageProfile } = useMainProfile();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/tvshow", label: "TV Shows" },
    { href: "/movies", label: "Movies" },
    { href: "/new", label: "New & Popular" },
    { href: "/my-list", label: "My List" },
    { href: "/languages", label: "Browse by Languages" },
  ];
  const linksMobile = [
    { href: "/tvshow", label: "TV Shows" },
    { href: "/movies", label: "Movies" },
  ];

  return (
    <>
      <header
        className="hidden md:flex p-4 fixed top-0 w-full flex items-center justify-between  z-20"
        style={{ paddingLeft: "50px" }}
      >
        <div className="flex items-center gap-4 pt-4 md:pt-0">
          <Link href="/" className="flex items-center">
            <Image
              className="hidden md:block"
              src="/NetflixLogo.png"
              alt="Netflix"
              width={100}
              height={50}
            />
          </Link>

          <nav className="hidden md:flex gap-6 text-white text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "font-bold"
                    : "text-gray-300"
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-5 text-white">
          <FaMagnifyingGlass />
          <span>Kids</span>
          <FaBell />
          <div className="flex items-center gap-1">
            <Image src={imageProfile} alt="Profile" width={32} height={32} />
            <IoMdArrowDropdown />
          </div>
        </div>

        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-6 text-white text-lg md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <FaMagnifyingGlass />
            <FaBell />
          </div>
        </div>
      </header>

      <header className="md:hidden p-4 fixed top-0 w-full flex-wrap items-center justify-between  z-20">
        <div className="flex items-center gap-4 pt-4 flex-1 justify-between  w-full">
          <Image
            className="md:hidden"
            src="/n.png"
            alt="Netflix"
            style={{ width: "auto", height: "auto" }}
            width={25}
            height={25}
          />

          <div className="flex items-center gap-4">
            <MdCastConnected
              style={{ width: "32px", height: "32px" }}
              width={32}
              height={32}
            />

            <Image src={imageProfile} alt="Profile" width={32} height={32} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav
            className=" flex items-center gap-4 text-white "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingTop: "20px",
              color: "white",
            }}
          >
            {linksMobile.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <div
              // key={"categories"}
              // href={"/"}
              style={{
                gap: "2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Categories <TiArrowSortedDown />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
