import React from "react";
import Grid from "../components/Grid";
import Teams from "../components/Teams";
import YourDeck from "../components/YourDeck";
import Ads from "../components/Ads";

const Game = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-orange-300 gap-6">
      <div className="">
        <Grid />
      </div>

      <div className="mx-auto flex flex-col items-center">
        <Teams />
        <YourDeck />
        <Ads />
      </div>
    </div>
  );
};

export default Game;
