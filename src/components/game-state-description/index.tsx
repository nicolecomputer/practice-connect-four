import "./game-state-description.css"

import { Color, GameState } from "../../lib/connect-four"

type GameStateProps = {
    state: GameState
    currentColor: Color
}

type InPlayProps = {
    currentColor: Color
}
function InPlay({ currentColor }: InPlayProps) {
    return (
        <p className="game-state">It's <span className={`${currentColor}-turn`}>{currentColor}'s</span> turn</p>
    )
}
export function GameStateDescription({ state, currentColor }: GameStateProps) {
    if (state.type === "in-play") {
        return <InPlay currentColor={currentColor} />
    }

    return <p className="game-state">Unknown game state</p>
}
