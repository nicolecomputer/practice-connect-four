export type Color = "red" | "blue"

export type EmptySpot = {
    type: "empty-spot"
}

export type FilledSpot = {
    type: "filled-spot",
    color: Color
}

export type Spot = EmptySpot | FilledSpot;

export type Column = Spot[];

export type Board = Column[];


// Initialization

function emptyColumn(depthOfRow: number): Column {
    return new Array<Spot>(depthOfRow).fill({ type: "empty-spot" })
}

export function emptyBoard(numberOfRows: number, depthOfRows: number): Board {
    return new Array<Column>(numberOfRows).fill(emptyColumn(depthOfRows))
}

// Add pieces to the board
export function nextFreeSpot(board: Board, column: number): number {
    const firstFilled = board[column].findIndex(spot => spot.type === "filled-spot")

    if (firstFilled < 0) {
        return board[column].length - 1
    }
    return firstFilled - 1
}

export function canAddPiece(board: Board, column: number): boolean {
    return nextFreeSpot(board, column) >= 0
}

export function columnsAreAvailable(board: Board): boolean[] {
    return board.map((_, columnIndex) => canAddPiece(board, columnIndex))
}

export class RowFullError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ConnectFour.BoardFull";
        Object.setPrototypeOf(this, RowFullError.prototype);
    }
}

export class InvalidColumnError extends Error {
    constructor(message: string = "") {
        super(message);
        this.name = "ConnectFour.InvalidRow";
        Object.setPrototypeOf(this, InvalidColumnError.prototype);
    }
}

export function addPiece(board: Board, color: Color, column: number): Board {
    if (column < 0 || column > (board.length - 1)) {
        throw new InvalidColumnError()
    }

    const spotForPiece = nextFreeSpot(board, column)

    if (spotForPiece < 0) {
        throw new RowFullError(`Row ${column} is already full`)
    }

    const nextRow = [...board[column]]
    nextRow[spotForPiece] = { type: "filled-spot", color: color }

    const nextBoard = [...board]
    nextBoard[column] = nextRow

    return nextBoard
}

// Check game state
export type GameInPlay = {
    type: "in-play"
}
export type GameDraw = {
    type: "cats-game"
}

export type GameWon = {
    type: "won",
    color: Color
}
export type GameState = GameInPlay | GameDraw | GameWon;

// function winnerInRows(board: Board): Color | null {
//     return null
// }

function winnerInColumns(board: Board): Color | null {
    for (const column of board) {
        let currentColor: Color | undefined = undefined
        let inARow = 0
        for (const spot of column) {
            if (spot.type === "filled-spot") {
                if (spot.color === currentColor) {
                    inARow += 1
                } else {
                    currentColor = spot.color
                    inARow = 1
                }

                if (inARow === 4) {
                    return currentColor
                }
            }
        }
    }
    return null
}

// function winnerInForwardDiagonals(board: Board): Color | null {
//     return null;
// }

// function winnerInBackwardDiagonals(board: Board): Color | null {
//     return null;
// }

export function boardIsFull(board: Board): boolean {
    for (const column of board) {
        for (const spot of column) {
            if (spot.type === "empty-spot") {
                return false
            }
        }
    }
    return true;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gameState(board: Board): GameState {
    const winner = [
        // winnerInRows(board),
        winnerInColumns(board),
        // winnerInForwardDiagonals(board),
        // winnerInBackwardDiagonals(board)
    ].filter(winner => winner !== null)

    if (winner.length > 0) {
        return {
            type: "won",
            color: winner[0]
        }
    }

    if (boardIsFull(board)) {
        return {
            type: "cats-game"
        }
    }

    return {
        type: "in-play"
    }
}

// Utility functions
export function nextTurn(color: Color): Color {
    if (color === "red") {
        return "blue"
    } else if (color === "blue") {
        return "red"
    }

    throw new Error(`unknown color ${color}`)
}
