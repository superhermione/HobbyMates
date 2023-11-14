import { useState } from 'react'
import CreatePlayer from './pages/CreatePlayer'
import './App.css'
import DisplayPlayers from './pages/DisplayPlayers'

function App() {

  return (
    <div className='App'>
      <h1>Make a post to find your dream team member! </h1>
      <DisplayPlayers/>
    </div>
  )
}

export default App
