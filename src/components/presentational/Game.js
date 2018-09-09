import React from 'react'

const Game = ({ game }) => {
  const tagListItems = game.game.tags.map(
    (tag) => <li class="tag">{tag}</li>
  )
  return <div>
    <div class="title">
      <a href={game.game.url}>{game.game.title}</a>
    </div>
    <div class="ld">
      <a href={game.ld.url}>#{game.ld.no}</a>
    </div>
    <div class="description">
      {game.game.description}
    </div>
    <div class="tags">
      <ul>{tagListItems}</ul>
    </div>
  </div>
}

export default Game
