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
          className="w-screen h-60 object-cover border-4 border-black"
          alt="Magic cards laid out"
        />

        <h1
          className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl xl:text-9xl text-red-500 text-center"
          style={{
            textShadow:
              "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
          }}
        >
          Magic Mondays
        </h1>
      </div>

      <div className="h-10 flex flex-row justify-center items-center gap-8 w-full bg-white text-black text-xl xs:text-3xl sm:text-4xl">
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
