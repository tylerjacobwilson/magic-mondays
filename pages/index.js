/*
This is a JavaScript/React code that exports a functional component called Home. It imports several modules:

React which is the base library for building React components.
Image from the next/image module which is a component that optimizes images for performance.
Inter from the next/font/google module which is a function that allows you to import Google Fonts into your Next.js app. In this case, it's importing the "Inter" font with the "latin" subset.
HomePage and Contact which are two custom React components that are being used within the Home component.
In the Home component, it returns a div that contains the HomePage and Contact components. The purpose of this code is to render a page that displays the home page and contact information.*/
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
