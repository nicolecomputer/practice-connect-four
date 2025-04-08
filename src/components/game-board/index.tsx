import "./game-board.css"

import { Board } from "../../lib/connect-four"

import { FilledSpot, EmptySpot } from "./Spots"

type GameBoardProps = {
    board: Board
}
export default function GameBoard({ board }: GameBoardProps) {
    return (
        <div className="game-board" style={{
            gridTemplateColumns: `repeat(${board.length}, 1fr)`
        }}>
            {new Array(board[0].length).fill(0).map((_, row) => {
                return new Array(board.length).fill(0).map((_, column) => {
                    const spot = board[column][row]
                    if (spot.type === "empty-spot") {
                        return <EmptySpot />
                    }
                    else if (spot.type === "filled-spot") {
                        return <FilledSpot color={spot.color} />
                    }
                })
            })}
        </div>
    )
}
