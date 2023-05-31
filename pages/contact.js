import React, { useState } from "react";

export default function Contact() {
  const [count, setCount] = useState(47);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="pt-10 text-5xl">Customers Served</h1>
      <div className="flex flex-row justify-center items-center pt-4">
        <button
          className="h-20 w-20 pb-7 mr-2 text-9xl border-red-600 rounded-md border-2 bg-red-500 flex items-center justify-center"
          onClick={decrement}
        >
          -
        </button>
        <div className="p-3 mx-2 text-5xl text-lime-950 border-red-600 rounded-md border-2 bg-lime-200">
          {count}
        </div>
        <button
          className="h-20 w-20 pb-5 mr-2 text-8xl border-red-600 rounded-md border-2 bg-cyan-500 flex items-center justify-center"
          onClick={increment}
        >
          +
        </button>
      </div>

      <div className="text-sm sm:text-xl lg:text-2xl">
        Contact Me @: tylerjacobwilson@gmail.com
      </div>
    </div>
  );
}
