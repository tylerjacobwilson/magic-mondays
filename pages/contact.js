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
      <div className="flex flex-row justify-center items-center pt-10">
        <button
          className="p-3 mr-2 text-5xl border-red-600 rounded-md border-2 bg-red-500"
          onClick={increment}
        >
          Add
        </button>
        <div className="p-3 mx-2 text-5xl text-lime-950 border-red-600 rounded-md border-2 bg-lime-200">
          {count}
        </div>
        <button
          className="p-3 ml-2 text-5xl border-red-600 rounded-md border-2 bg-cyan-500"
          onClick={decrement}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}
