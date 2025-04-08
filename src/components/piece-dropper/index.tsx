type PieceDropperProps = {
    numberOfColumns: number,
    onDrop: (column: number) => void
}
export default function PieceDropper({ numberOfColumns, onDrop }: PieceDropperProps) {
    return (
        <div className="piece-dropper-container">
            {new Array(numberOfColumns).map((_, columnIndex: number) => {
                return (
                    <button
                        className="piece-dropper"
                        id={`piece-dropper-${columnIndex}`}
                        onClick={() => {
                            onDrop(columnIndex)
                        }}
                    ></button>
                )
            })}
        </div>
    )
}
