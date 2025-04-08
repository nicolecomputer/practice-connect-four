import React from 'react'
import './App.css'
import GameBoard from './components/game-board'
import { connectFourReducer, defaultState } from './reducer'
import PieceDropper from './components/piece-dropper'
import { GameStateDescription } from './components/game-state-description'

function App() {
  const [state, dispatch] = React.useReducer(connectFourReducer, defaultState)
  return (
    <>
      <div className="connect-four-game">
        <h1 className='gametitle'>Connect 4</h1>
        <PieceDropper
          numberOfColumns={state.board.length}
          currentTurn={state.currentTurn}
          onDrop={(column) => {
            dispatch({ type: 'add-piece', color: state.currentTurn, column: column })
          }}
        />
        <GameBoard board={state.board} />
        <GameStateDescription
          state={state.gameState}
          currentColor={state.currentTurn}
          onPlayAgain={() => {
            dispatch({ type: "restart" })
          }}
        />
      </div>
    </>
  )
}

export default App
