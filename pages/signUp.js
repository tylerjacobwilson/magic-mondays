import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wizard from "../public/Images/Wizard.png";

export default function signUp() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Perform any validation or data processing here

    // Display the entered data on the screen
    const formData = {
      username,
      firstName,
      lastName,
      email,
      zipCode,
      password,
    };
    // You can replace this with your desired display logic

    setSubmitted(true); // Set submitted to true
  };

  return (
    <div className="flex flex-col items-center">
      <br />
      <h1 className="text-5xl xl:text-5xl font-bold mb-4">Sign Up:</h1>

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

        <label htmlFor="firstName" className="mb-2">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="text-black mb-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName" className="mb-2">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="text-black mb-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="text-black mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="zipCode" className="mb-2">
          Zip Code:
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          className="text-black mb-2"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p>
          Username: {username}
          <br />
          First Name: {firstName}
          <br />
          Last Name: {lastName}
          <br />
          Email: {email}
          <br />
          Zip Code: {zipCode}
          <br />
          Password: {password}
        </p>
      )}

      <div>
        <Image className="pt-8 " src={Wizard} height={500} />
      </div>
    </div>
  );
}
