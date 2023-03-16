import React, { useState, useEffect } from 'react';
import './App.scss';
import Square from './components/Square/Square';
import * as _ from "lodash";
import Header from './components/Header/Header';


function App() {
  
  const numberOfSquares = 9;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [value, setValue] = useState("");
  const [xIsNext, setXIsNext] = useState(true);
  const [haveAWinner, setHaveAWinner] = useState(false);
  const [haveADraw, setHaveADraw] = useState(true);
  const [count, setCount] = useState(0)

  const checkWinners = (board:any[]) => {

    const winningCombinations:number[][] = [
                                              [0,1,2],
                                              [3,4,5],
                                              [6,7,8],
                                              [0,3,6],
                                              [1,4,7],
                                              [2,5,8],
                                              [0,4,8],
                                              [2,4,6],
                                          ];

    for(let index = 0; index < winningCombinations.length; index++) {
      const [a,b,c] = winningCombinations[index];

      
      if(board[a] != null && board[a] === board[b] && board[a] === board[c]) {
       
        setValue(board[a]);
        setHaveAWinner(true);
        return board[a]
      }else if(count === 9 && haveAWinner === false){
        setValue("It's a draw");
        setHaveADraw(true);
      }       
  
    }
    return null;
  }


  const countMoves = () => {
    setCount(count +1);
  };

  useEffect(() => {
    if(haveAWinner === false){
      
      checkWinners(board);
    }

  },[board])

  const onClick = (index:number) => { 
    const _board = _.cloneDeep(board)
    
    if(xIsNext === true){  
      _board[index] = "X";
      setXIsNext(false);

    }else{
      _board[index] = "O";
      setXIsNext(true);
    }
    setBoard(_board);
    countMoves();
  }


  return (
    
    <div className="wrapper">
      <Header />
      <div className="container">

        <div>
          <h3>Moves: {count}</h3>
          <h2>{
              xIsNext 
              ? 
                "X"
              :
                "O"
            } it's your turn</h2>
        </div>

        <div className="trisBox">
           {
            Array(numberOfSquares).fill(true).map((_, i) => <Square
             key={i}
             index={i} 
             value={value}
             onClick={onClick}
             board={board}
             haveAWinner={haveAWinner}
             haveADraw={haveADraw}
             />
             )  
          }
        </div>

        <div className="leaderBoard">
          {
            haveAWinner 
            &&
            <>
            <h2 className='winnerTitle'>The Winner is: {value}</h2>
            </>
          }
          {
            haveADraw
            &&
            <h2 className='winnerTitle'>{value}</h2>
          }
           <button onClick={() =>{
              setBoard(Array(9).fill(null))
              setHaveAWinner(false);
              setHaveADraw(false);
              setCount(0);
            }}
            >
              Play again</button>
        </div>

      </div>
    </div>
  );
}

export default App;
