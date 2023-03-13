import React from 'react'
import Grid from './components/Grid'
import Teams from './components/Teams'
import YourDeck from './components/YourDeck'
import Scores from './components/Scores'
import Lobby from './screens/Lobby'
import './style.css'
import Onboarding from './screens/Onboarding'
import { Route, Router,Routes } from 'react-router-dom'


const App = () => {


  return (
    <div className='main'>

    <Router>
        <Onboarding />
        <Routes>
            <Route path='/about' element={<Lobby/>} />
        </Routes>
        </Router>
      {/* <div className="grid">
        <Grid />
      </div>

      <div className="sidebar">
        <Teams />
        <Scores />
        <YourDeck />
      </div> */}

    </div>
  )
}

export default App
