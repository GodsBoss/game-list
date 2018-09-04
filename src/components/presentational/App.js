import './App.css'
import React from 'react'

const App = (data) => {
  const items = data.games.map(
    (game) =>
      <li>{game.title}</li>
  )
  return (
    <ul>
      {items}
    </ul>
  )
}

export default App
