import React from 'react'
import './App.css'
import GameBoard from './components/game-board'
import { connectFourReducer, defaultState } from './reducer'
import PieceDropper from './components/piece-dropper'

function App() {
  const [state, dispatch] = React.useReducer(connectFourReducer, defaultState)
  return (
    <>
      <div>
        <h1>Connect 4</h1>
        <PieceDropper
          numberOfColumns={state.board.length}
          onDrop={(column) => {
            dispatch({ type: 'add-piece', color: state.currentTurn, column: column })
          }}
        />
        <GameBoard board={state.board} />
      </div>
    </>
  )
}

export default App
