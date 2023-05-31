import React from "react";
import Link from "next/link";
import Image from "next/image";
import MagicBanner from "../public/Images/Banner1.JPG";

export default function NavBar() {
  return (
    <div className="w-screen bg-neutral-950 text-neutral-200">
      <div className="relative">
        <Image
          src={MagicBanner}
          className="w-screen h-60 object-cover border-2 border-black"
          alt="Magic cards laid out"
        />

        <h1
          className="absolute inset-0 flex items-center justify-center text-7xl sm:text-8xl lg:text-9xl xl:text-10xl text-red-500 text-center font-serif"
          style={{
            textShadow:
              "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
          }}
        >
          Magic Mondays
        </h1>
      </div>

      <div
        className="h-10 flex flex-row justify-center items-center gap-8 w-full bg-white text-black 
       text-sm sm:text-2xl lg:text-3xl xl:text-4xl pb-2"
      >
        <Link href="/">
          <div className="hover:text-red-500">Home</div>
        </Link>
        <Link href="/aboutUs">
          <div className="hover:text-blue-500">About Us</div>
        </Link>
        <Link href="/contact">
          <div className="hover:text-green-500">Contact</div>
        </Link>
        <Link href="/user">
          <div className="hover:text-red-500">Players</div>
        </Link>
      </div>
    </div>
  );
}
