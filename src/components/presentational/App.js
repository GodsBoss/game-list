import './App.css'
import React from 'react'

const App = (data) => {
  const items = data.games.map(
    (game) =>
      <li key={game.id}>{game.title}</li>
  )
  return (
    <ul>
      {items}
    </ul>
  )
}

export default App
