import React from "react"
import { Inter } from "next/font/google"
import HomePage from "./homePage"
import Contact from "./contact"
import User from "./user"
import AboutUs from "./aboutUs"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <HomePage />
      <Contact />
      <User />
      <AboutUs />
    </div>
  )
}
