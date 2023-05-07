import React from 'react'
import Grid from './components/Grid'
import Teams from './components/Teams'
import YourDeck from './components/YourDeck'
import Scores from './components/Scores'
import Lobby from './screens/Lobby'
import './style.css'
import Onboarding from './screens/Onboarding'
import { Route, Router,Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Game from './screens/Game'

const App = () => {


  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Onboarding />}/>
        <Route path='/game' element={<Game />}/>

      </Routes>

    </div>

  )
}

export default App
