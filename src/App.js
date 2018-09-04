import React from 'react';
import { connect } from 'react-redux'
import './App.css';

const PresApp = (data) => {
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

const ContApp = connect((state) => state)(PresApp)

export default ContApp;
