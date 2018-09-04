import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

const PresApp = (data) => {
  const rows = data.games.map(
    (game) =>
      <tr>
        <td>{game.title}</td>
      </tr>
  )
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const ContApp = connect((state) => state)(PresApp)

export default ContApp;
