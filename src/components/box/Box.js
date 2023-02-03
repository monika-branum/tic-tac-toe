import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ box, index }) {
  const { handleBoxClick } = useGameContext();
  return (
    <div
      className="box"
      onClick={() => {
        {
          handleBoxClick(index);
        }
      }}
    >
      {box}
    </div>
  );
}
