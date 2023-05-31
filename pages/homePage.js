import React from "react";
import Image from "next/image";
import Link from "next/link";
import Minotaur from "../public/Images/Minotaur_05.png";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-black text-white flex">
      <div className="flex flex-col justify-between">
        <div>
          <br />

          <h1
            className="text-lime-300 text-3xl margin: 20px w-screen leading-5 mb-10"
            style={{
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
            }}
          >
            Welcome to Magic Mondays! The best place to manage your play group.
          </h1>

          <h1
            className="text-blue-500 text-3xl margin: 20px w-screen leading-5 mb-10"
            style={{
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
            }}
          >
            Sign In:
          </h1>

          <form action="#" method="post">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />
            <br />
            <br />

            <p>
              Don't have an account?{" "}
              <a
                className="text-red-600 text-3xl margin: 20px w-screen leading-5 mb-10"
                style={{
                  textShadow:
                    "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
                href="signUp"
              >
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="mx-auto">
        <div>
          <Image src={Minotaur} height={500} />
        </div>
      </div>
    </div>
  );
}
