import React from 'react'

const Game = ({ game, ld }) => {
  const tagListItems = game.tags.map(
    (tag) => <li class="tag">{tag}</li>
  )
  return <div>
    <div class="title">
      <a href={game.url}>{game.title}</a>
    </div>
    <div class="ld">
      <a href={ld.url}>#{ld.no}</a>
    </div>
    <div class="description">
      {game.description}
    </div>
    <div class="tags">
      <ul>{tagListItems}</ul>
    </div>
  </div>
}

export default Game
