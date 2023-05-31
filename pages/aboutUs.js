import React from "react";
import Image from "next/image";
import Link from "next/link";
import Minotaur from "../public/Images/Minotaur_05.png";

export default function AboutUs() {
  return (
    <div className="flex w-screen justify-center items-center">
      <h1 className="lg:text-sm xl:text-5xl margin: 20px w-full max-w-xl pt-10 mb-10">
        We've been doing this for about all and all 3 months. It will eventually
        get better as I start to add some functionality. So far you can create
        an account and add decks to your profile.
      </h1>
    </div>
  );
}
