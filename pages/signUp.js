import React from "react"; // React is a library for building user interfaces (usually imported in React components)
import Image from "next/image"; // Next.js module for optimizing and loading images
import Link from "next/link"; // Next.js module for client-side navigation

export default function signUp() {
  return (
    <div>
      <h1>Sign In</h1> // Heading element displaying "Sign In"
      <form action="#" method="post">
        {" "}
        // Form element with an action and method attribute
        <label htmlFor="username">Username:</label> // Label for the username
        input field
        <input type="text" id="username" name="username" /> // Text input field
        for the username
        <br /> // Line break element
        <br /> // Line break element
        <label htmlFor="firstName">First Name:</label> // Label for the first
        name input field
        <input type="text" id="username" name="username" /> // Text input field
        for the first name
        <br /> // Line break element
        <br /> // Line break element
        <label htmlFor="password">Password:</label> // Label for the password
        input field
        <input type="password" id="password" name="password" /> // Password
        input field
        <br /> // Line break element
        <br /> // Line break element
        <input type="submit" value="Sign In" /> // Submit button for the form
      </form>
      <p></p> // Empty paragraph element
    </div>
  );
}

