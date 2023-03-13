import React from 'react'
import { Hand } from 'react-deck-o-cards';
import CardData from '../CardData';


const Grid = () => {

  const defHandStyle = {
    position: 'relative',
    display: 'inline-block',
    marginRight: '8px',
    maxHeight:'9vh',
    minHeight:'9vh',

    // maxWidth:'100vw',
    padding: 0,
  };
  const handleCardClick = (cards) => {
    console.log(`Clicked on card: ${cards.rank} of ${cards.suit}`);
    // Do something with the clicked card data
  }
  const cards = CardData.data.cards;
  const rows = [];

  for (let i = 0; i < 10; i++) {
    const columns = [];

    for (let j = 0; j < 10; j++) {
      const index = i * 10 + j;

      if (index < cards.length) {
        columns.push(
          <Hand key={index} cards={[cards[index]]} hidden={false} style={defHandStyle} />
        );
      } else {
        // If index is outside the bounds of the cards array, push an empty div
        columns.push(<div key={index}></div>);
      }
    }
    rows.push(<div key={i}>{columns}</div>);
  }

  return (
    <div className='grid'>{rows}</div>
  )
}

export default Grid
