import React from "react";

export default function Home() {
  return (
    <div className=" m-auto flex items-center justify-center min-h-screen bg-gray-800">
      <div>
        <a
          href="/hei-verden"
          className="bg-purple-600 hover:bg-purple-800 text-gray-800 font-bold py-2 px-4 rounded m-2"
        >
          Hello World
        </a>
      </div>
    </div>
  );
}
