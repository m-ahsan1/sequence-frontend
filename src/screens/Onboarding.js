import React, { useState } from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [team, setTeam] = useState("");
  const [username, setUserName] = useState("");

  return (
    <div className="bg-orange-500 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg h-[400px] w-[260px] md:h-[500px] md:w-[500px] shadow-md">
        <h1 className="font-body text-4xl text-center mt-5">
          Welcome to Sequence Online Game
          {team}
        </h1>
        <div className="flex flex-col justify-center m-10">
          <label className="font-bold my-2" htmlFor="name">
            Nick Name
          </label>
          <input
            className="border-2 border-slate-400 rounded-lg shadow-sm h-[40px] items-center placeholder:mx-2"
            type="text"
            placeholder=" Enter you nick/game name here"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="font-bold my-4" htmlFor="name">
            Team
          </label>
          <div className="mx-auto flex gap-5">
            <button
              className="bg-red-400  h-[32px] w-[70px] rounded-md shadow-sm hover:scale-105 duration-200"
              onClick={() => setTeam("red")}
            >
              Red
            </button>
            <button
              className="bg-blue-400 h-[32px] w-[70px] rounded-md shadow-sm hover:scale-105 duration-200"
              onClick={() => setTeam("blue")}
            >
              Blue
            </button>
            <button
              className="bg-green-400 h-[32px] w-[70px] rounded-md shadow-sm hover:scale-105 duration-200"
              onClick={() => setTeam("green")}
            >
              Green
            </button>
          </div>
          <Link to="/game">
            <button className="border-2 h-[35px] w-[100px] rounded-lg shadow-sm my-10 mx-auto hover:scale-105">
              Play
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
