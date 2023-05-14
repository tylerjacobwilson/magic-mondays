import React from "react";
import Image from "next/image";
import MagicBanner from "../public/Images/MagicBanner1.JPG";

export default function NavBar() {
  return (
    <div className="w-screen bg-neutral-950 text-neutral-200 relative">
      <Image
        src={MagicBanner}
        className="w-screen h-60 object-cover"
        alt="Magic cards laid out"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-4xl font-bold">MAGIC MONDAYS</div>
      </div>
    </div>
  );
}
