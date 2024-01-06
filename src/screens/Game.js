import React from "react";
import Grid from "../components/Grid";
import Teams from "../components/Teams";
import YourDeck from "../components/YourDeck";

const Game = () => {
  return (
    <div className="flex flex-col md:flex-row bg-orange-300 gap-6">
      <div className="flex-grow">
        <Grid />
      </div>

      <div className="flex-glow mx-6">
        <Teams />
        <YourDeck />
      </div>
    </div>
  );
};

export default Game;
