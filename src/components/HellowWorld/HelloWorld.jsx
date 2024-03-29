import React from "react";
import Home from "../Home/Home";

export default function HelloWorld() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div className=" m-auto flex items-center justify-center min-h-screen">
        <div className="bg-purple-600 p-40 rounded m-2">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            *Hello Wrld*
          </h1>
        </div>
      </div>
    </div>
  );
}
