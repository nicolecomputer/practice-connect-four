export type Color = "red" | "blue"

export type EmptySpot = {
    type: "empty-spot"
}

export type FilledSpot = {
    type: "filled-spot",
    color: Color
}

export type Spot = EmptySpot | FilledSpot;

export type Row = Spot[];

export type Board = Row[];


// Initialization

function emptyRow(depthOfRow: number): Row {
    return new Array<Spot>(depthOfRow).fill({ type: "empty-spot" })
}

export function emptyBoard(numberOfRows: number, depthOfRows: number): Board {
    return new Array<Row>(numberOfRows).fill(emptyRow(depthOfRows))
}

// Add pieces to the board
export function nextFreeSpot(board: Board, row: number): number {
    const firstFilled = board[row].findIndex(spot => spot.type === "filled-spot")

    if (firstFilled < 0) {
        return board[row].length - 1
    }
    return firstFilled - 1
}

export class RowFullError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ConnectFour.BoardFull";
        Object.setPrototypeOf(this, RowFullError.prototype);
    }
}

export class InvalidRowError extends Error {
    constructor(message: string = "") {
        super(message);
        this.name = "ConnectFour.InvalidRow";
        Object.setPrototypeOf(this, InvalidRowError.prototype);
    }
}

export function addPiece(board: Board, color: Color, row: number): Board {
    if (row < 0 || row > (board.length - 1)) {
        throw new InvalidRowError()
    }

    const spotForPiece = nextFreeSpot(board, row)

    if (spotForPiece < 0) {
        throw new RowFullError(`Row ${row} is already full`)
    }

    const nextRow = [...board[row]]
    nextRow[spotForPiece] = { type: "filled-spot", color: color }

    const nextBoard = [...board]
    nextBoard[row] = nextRow

    return nextBoard
}

// Check game state
