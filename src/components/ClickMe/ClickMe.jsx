import React from "react";
import Home from "../Home/Home";

export default function ClickMe() {

function ClickMe() {
    alert("How dare you")
}

function WayYouClickMe() {
    alert("(*Way You Click Me*)")
}

function ClickMe3(){
    alert("SOS")
}

  return (
    <div>
      <div>
        <Home />
      </div>
      <div className="m-auto flex items-center justify-center min-h-screen">
        <div className="bg-purple-600 p-40 rounded m-2">
          <button onClick={ClickMe} className="bg-fuchsia-600 hover:bg-fuchsia-800 text-gray-800 font-bold py-2 px-4 rounded">Click Me</button>
          <button onClick={WayYouClickMe} className="bg-fuchsia-600 hover:bg-fuchsia-800 text-gray-800 font-bold py-2 px-4 rounded">c:</button>
          <button onClick={ClickMe3} className="bg-fuchsia-600 hover:bg-fuchsia-800 text-gray-800 font-bold py-2 px-4 rounded">--- _ _ _ ---</button>
        </div>
      </div>
    </div>
  );
}
