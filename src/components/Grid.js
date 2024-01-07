import React, { useState, useEffect } from "react";
import { data } from "../CardData.js";

const Grid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data.cards);
  }, []);

  const handleCardClick = (id) => {
    console.log("Card Clicked!");
  };

  return (
    <div className="grid grid-cols-10">
      {cards.map((card) => (
        <img
          className="h-[50px] w-[30px] md:h-[70px] md:w-[50px] lg:h-[99px] lg:w-[80px] m-[2px] lg:m-[4px]  hover:scale-105 duration-200 shadow-sm"
          id={card.id}
          src={card.src}
          alt="cards"
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Grid;
