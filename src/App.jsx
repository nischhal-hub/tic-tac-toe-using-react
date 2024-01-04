import { useState } from 'react'
import './App.css'
import Square from './components/Square';

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

  return (
      <>
          <h2>Tic-Tac-Toe</h2>
          <h2>{status}</h2>
          <div className="board-row flex">
              <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
              <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
              <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
          </div>
          <div className="board-row flex">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row flex">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
      </>
  );
};

function App() {
  

  return (
      <>
        <Board />
      </>
  );
};
function calculateWinner(squares) {
  const list = [
      [0, 1, 2], //*array of index that forms a line in box.
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
  ];

  for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
      }
  }
  return null;
}

export default App
