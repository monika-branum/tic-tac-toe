import React from 'react';
import { useGameContext } from '../../context/GameContext.js';
import './Board.css';
import Box from '../box/Box.js';

export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="boxes">
      {board.map((box, index) => (
        <Box key={index} box={box} />
      ))}
    </div>
  );
}
