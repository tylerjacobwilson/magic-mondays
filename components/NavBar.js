import React from "react";
import Image from "next/image";
import MagicBanner from "../public/Images/MagicBanner1.JPG";

export default function NavBar() {
  return (
    <div className="w-screen  bg-neutral-950 text-neutral-200">
      <Image
        src={MagicBanner}
        // height={600}
        className="w-screen h-60 object-cover"
        alt="Magic cards layed out"
      />
    </div>
  );
}
