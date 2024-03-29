import React from "react";
import { Hand } from "react-deck-o-cards";

const YourDeck = () => {
  const defHandStyle = {
    position: "relative",
    display: "inline-block",
    marginRight: "8px",
    maxHeight: "9vh",
    minHeight: "9vh",

    // maxWidth:'100vw',
    padding: 0,
  };

  const card = [{ rank: 12, suit: 2 }];
  let deck = [];

  for (let i = 0; i < 6; i++) {
    deck.push(<Hand cards={card} hidden={false} style={defHandStyle} />);
  }

  return (
    <div className="bg-orange-600 p-2 md:p-5 rounded-lg my-6">
      <h1 className="text-lg text-white font-bold">Your Cards</h1>
      {deck}
    </div>
  );
};

export default YourDeck;
