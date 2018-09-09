import './App.css'
import Game from './Game'
import React from 'react'

const App = (data) => {
  const items = data.games.map(
    (item) => <li key={item.id}><Game game={item.game} ld={item.ld}/></li>
  )
  return (
    <ul>
      {items}
    </ul>
  )
}

export default App
