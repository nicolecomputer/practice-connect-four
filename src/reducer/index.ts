import { addPiece, Board, Color, emptyBoard, gameState, GameState, nextTurn } from "../lib/connect-four"

export type ConnectFourState = {
    board: Board,
    currentTurn: Color,
    gameState: GameState
}

export type AddPieceAction = {
    type: "add-piece",
    color: Color,
    column: number
}

export type RestartGameAction = {
    type: "restart"
}

export type Action = AddPieceAction | RestartGameAction;

export const defaultState: ConnectFourState = {
    board: emptyBoard(7, 6),
    currentTurn: "red",
    gameState: {
        type: "in-play"
    }
}

export function connectFourReducer(state: ConnectFourState, action: Action): ConnectFourState {
    if (action.type === "restart") {
        return defaultState
    } else if (action.type === "add-piece") {
        const nextBoard = addPiece(state.board, action.color, action.column)
        return {
            board: nextBoard,
            currentTurn: nextTurn(state.currentTurn),
            gameState: gameState(nextBoard)
        }
    }
    return state
}
