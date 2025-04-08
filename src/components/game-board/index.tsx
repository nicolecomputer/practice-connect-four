import { Board } from "../../lib/connect-four"

import { FilledSpot, EmptySpot } from "./Spots"

type GameBoardProps = {
    board: Board
}
export default function GameBoard({ board }: GameBoardProps) {
    return (
        <div className="game-board">
            {new Array(board[0].length).map((_, column) => {
                return new Array(board.length).map((_, row) => {
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
