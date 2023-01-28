import './App.css';
import Board from './components/board/Board.js';
import { currentPlayer } from './components/context/GameContext.js';

function App() {
  return (
    <div className="App">
      <h1 className="turnText">{currentPlayer}</h1>
      <Board />
    </div>
  );
}

export default App;
