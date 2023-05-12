import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./homePage";
import Contact from "./contact";
import User from "./user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomePage />
      <Contact />
      <User />
    </div>
  );
}
