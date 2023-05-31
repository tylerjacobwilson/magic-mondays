import React from "react";
import Link from "next/link";
import Image from "next/image";
import MagicBanner from "../public/Images/Banner1.JPG";

export default function NavBar() {
  return (
    <div className="w-screen bg-neutral-950 text-neutral-200">
      <h1
        className="absolute inset-x-0 mx-auto text-9xl text-red-500 text-center"
        style={{
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
        }}
      >
        Magic Mondays
      </h1>

      <Image
        src={MagicBanner}
        className="w-screen h-60 object-cover border-4 border-black"
        alt="Magic cards laid out"
      />

      <div className="h-10 flex flex-row justify-center items-center gap-6 w-full bg-white text-black text-3xl">
        <Link href="/">
          <div className="hover:text-red-500">Home</div>
        </Link>
        <Link href="/user">
          <div className="hover:text-red-500">User</div>
        </Link>
        <Link href="/about">
          <div className="hover:text-red-500">About</div>
        </Link>
      </div>
    </div>
  );
}
