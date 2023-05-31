import React from "react"; // React is a library for building user interfaces (usually imported in React components)
import Image from "next/image"; // Next.js module for optimizing and loading images
import Link from "next/link"; // Next.js module for client-side navigation

export default function signUp() {
  return (
    <div>
      <h1 text>Sign Up</h1>
      <br />
      <br />
      <form action="#" method="post">
        {" "}
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="zipCode">Zip Code: </label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
      <p></p>
    </div>
  );
}
