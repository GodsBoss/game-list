import './App.css'
import Game from './Game'
import React from 'react'

const App = (data) => {
  const items = data.games.map(
    (game) =>
      <li key={game.id}><Game game={game} /></li>
  )
  return (
    <ul>
      {items}
    </ul>
  )
}

export default App
