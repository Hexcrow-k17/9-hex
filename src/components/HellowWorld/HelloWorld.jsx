import React from "react";
import Home from "../Home/Home";

export default function HelloWorld() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
        <Home />
      <div className="bg-purple-600 p-40">
        <h1 className="text-center text-6xl font-bold text-gray-800">*Hello Wrld*</h1>
      </div>
    </div>
  );
}
