import React from "react"
import Image from "next/image"
import Link from "next/link"
import Minotaur from "../public/Images/Minotaur_05.png"

export default function HomePage() {
  return (
    <div className='w-screen h-screen bg-black text-white flex'>
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='text-lg w-72 leading-5 mb-10'>
            Welcome to Magic Mondays! The best place on the web to manage your play group.
          </h1>
          <div className='bg-black text-white'>
            <Link href='/contact'>
              <div>Contact</div>
            </Link>
            <Link href='/user'>
              <div>User</div>
            </Link>
            <nav>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <br />
          <h1>Sign In</h1>
          <form action='#' method='post'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' />
            <br />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' />
            <br />
            <br />
            <input type='submit' value='Sign In' />
            <p>
              Do not have an account? <a href='signUp'>Create one</a>
            </p>
          </form>
        </div>
      </div>
      <div className='mx-auto'>
        <div>
          <Image src={Minotaur} height={500} />
        </div>
      </div>
    </div>
  )
}
