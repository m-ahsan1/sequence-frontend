import React from "react";

const Teams = () => {
  return (
    <div className="">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold my-3">
        Teams
      </h1>
      <div className="flex flex-row justify-center items-center gap-5 text-white">
        <div className="bg-blue-400 rounded-lg shadow-sm p-3 lg:p-5 font-bold md:w-[120px] lg:w-[200px]">
          <h2 className="text-center underline">Blue</h2>
          <ul className="text-xs mt-2">
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </div>
        <div className="bg-red-400 rounded-lg shadow-sm p-3 lg:p-5 font-bold md:w-[120px] lg:w-[200px]">
          <h2 className="text-center underline">Red</h2>
          <ul className="text-xs mt-2">
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </div>
        <div className="bg-green-400 rounded-lg shadow-sm p-3 lg:p-5 font-bold md:w-[120px] lg:w-[200px]">
          <h2 className="text-center underline">Green</h2>
          <ul className="text-xs mt-2">
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
