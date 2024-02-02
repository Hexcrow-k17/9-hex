import React from "react";

export default function Home() {
  return (
    <div className="pt-10 ">
      <div className=" m-auto flex justify-center bg-gray-800  ">
        <div>
          <a
            href="/Hello-World"
            className="bg-purple-600 hover:bg-purple-800 text-gray-800 font-bold py-2 px-4 rounded m-2"
          >
            Hello World
          </a>

          <a href="/Click-Me"
          className="bg-purple-600 hover:bg-purple-800 text-gray-800 font-bold py-2 px-4 rounded m-2"
          >
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
}
