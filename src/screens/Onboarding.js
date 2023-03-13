import React from 'react'
import { Link } from 'react-router-dom'

const Onboarding = () => {
  return (
    <div className='onboard--container'>
      <input type="text" placeholder='Name' className='name--placeholder'/>
      <input type="email" placeholder='Email' className='email--placeholder'/>
      <Link to="/Lobby">
        <button>Go to New Screen</button>
      </Link>
    </div>
  )
}

export default Onboarding
