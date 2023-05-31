import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Viking from "../public/Images/VikingLord.png";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };
    setSubmitted(true); // Set submitted to true
  };
  return (
    <div className="flex flex-col w-full h-screen bg-black text-white">
      <div className="flex justify-center px-10 ">
        <h1
          className="text-white-300 max-w-xl pt-10 text-sm 
        sm:text-3xl lg:text-4xl
        xl:text-5xl mb-10"
        >
          Welcome to Magic Mondays! The best place to manage you play group.
          Sign up, Select Decks, Make Games, Check Stats
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="text-black mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password" className="mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-black mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 my-4 rounded "
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p>
            Username: {username}
            <br />
            Password: {password}
          </p>
        )}
        <p>
          Don't have an account?{" "}
          <a
            className="text-red-600 text-base xl:text-3xl  w-screen mb-10"
            href="signUp"
          >
            Create one
          </a>
        </p>

        <Image className="pt-8 " src={Viking} height={500} />
      </div>
    </div>
  );
}
