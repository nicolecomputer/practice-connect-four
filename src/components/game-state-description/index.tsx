import "./game-state-description.css"

import { Color, GameState } from "../../lib/connect-four"
type InPlayProps = {
    currentColor: Color
}

function InPlay({ currentColor }: InPlayProps) {
    return (
        <div className="game-state">
            <p>It's <span className={`${currentColor}-highlight`}>{currentColor}'s</span> turn!</p>
        </div>
    )
}

type WinnerProps = {
    winnerColor: Color
    onPlayAgain: () => void
}
function Winner({ winnerColor, onPlayAgain }: WinnerProps) {
    return (
        <div className="game-state">
            <p><span className={`${winnerColor}-highlight`}>{winnerColor}</span> wins!</p>
            <button className="play-again-button" onClick={() => onPlayAgain()}>Play Again</button>
        </div>
    )
}

type TieGameProps = {
    onPlayAgain: () => void
}

function TieGame({ onPlayAgain }: TieGameProps) {
    return (
        <div className="game-state">
            <p>It's a tie!!</p>
            <button className="play-again-button" onClick={() => onPlayAgain()}>Play Again</button>
        </div>
    )
}

type GameStateProps = {
    state: GameState
    currentColor: Color
    onPlayAgain: () => void
}

export function GameStateDescription({ state, currentColor, onPlayAgain }: GameStateProps) {
    if (state.type === "in-play") {
        return <InPlay currentColor={currentColor} />
    } else if (state.type === "won") {
        return <Winner winnerColor={state.color} onPlayAgain={onPlayAgain} />
    } else if (state.type === "cats-game") {
        return <TieGame onPlayAgain={onPlayAgain} />
    }

    throw new Error(`unknown game state: ${state}`)
}
