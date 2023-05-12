import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div>
        <div className="bg-black text-white ">
          <h1 style={{ fontSize: "26px" }}>
            Welcome to Magic Mondays! The best place on the web to manage your
            play group.
          </h1>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
          <Link href="/user">
            <div>User</div>
          </Link>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <br />

        <h1>Sign In</h1>
        <form action="#" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <br />
          <input type="submit" value="Sign In" />
          <p>
            Don't have an account? <a href="signUp">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
}
