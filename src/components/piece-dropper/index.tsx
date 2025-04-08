import { Color } from "../../lib/connect-four"
import "./piece-dropper.css"

type PieceDropperProps = {
    numberOfColumns: number,
    currentTurn: Color,
    onDrop: (column: number) => void
}
export default function PieceDropper({ numberOfColumns, onDrop, currentTurn }: PieceDropperProps) {
    return (
        <div className={`piece-dropper-container current-turn-${currentTurn}`}>
            {new Array(numberOfColumns).fill(0).map((_, columnIndex: number) => (
                <button
                    className="piece-dropper"
                    key={`piece-dropper-column-${columnIndex}`}
                    id={`piece-dropper-${columnIndex}`}
                    onClick={() => {
                        onDrop(columnIndex)
                    }}
                ></button>
            )
            )}
        </div>
    )
}
