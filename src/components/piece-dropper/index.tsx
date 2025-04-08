import { Color } from "../../lib/connect-four"
import "./piece-dropper.css"

type PieceDropperProps = {
    numberOfColumns: number,
    currentTurn: Color,
    columnIsAvailable: boolean[]
    onDrop: (column: number) => void
}
export default function PieceDropper({ numberOfColumns, columnIsAvailable, onDrop, currentTurn }: PieceDropperProps) {
    return (
        <div className={`piece-dropper-container current-turn-${currentTurn}`}>
            {new Array(numberOfColumns).fill(0).map((_, columnIndex: number) => {
                if (columnIsAvailable[columnIndex]) {
                    return (
                        <button
                            className="piece-dropper"
                            key={`piece-dropper-column-${columnIndex}`}
                            id={`piece-dropper-${columnIndex}`}
                            onClick={() => {
                                onDrop(columnIndex)
                            }}

                        >
                            <div className={`game-piece piece-${currentTurn}`}></div>
                        </button>
                    )
                } else {
                    return (
                        <div
                            className="piece-dropper"
                            key={`piece-dropper-column-${columnIndex}`}
                        >
                        </div>
                    )
                }
            }
            )}
        </div>
    )
}
