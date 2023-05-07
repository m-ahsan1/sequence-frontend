import React from 'react'
import Grid from '../components/Grid'
import Scores from '../components/Scores'
import Teams from '../components/Teams'
import YourDeck from '../components/YourDeck'


const Game = () => {
  return (
    <div className='main'>


      <div className="grid">
        <Grid />
      </div>

      <div className="sidebar">
        <Teams />
        <Scores />
        <YourDeck/>


      </div>

    </div>
  )
}

export default Game
