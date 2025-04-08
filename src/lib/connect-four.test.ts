import { addPiece, emptyBoard, InvalidRowError, nextFreeSpot, RowFullError } from "./connect-four";
import type { Board } from "./connect-four";

describe("initialization", () => {
    describe("empty board", () => {
        it("returns an empty board", () => {
            const expected: Board = [
                [{ type: "empty-spot" }, { type: "empty-spot" }],
                [{ type: "empty-spot" }, { type: "empty-spot" }]
            ]
            const result = emptyBoard(2, 2)

            expect(result).toEqual(expected)
        })
    })
})

describe("Add Pieces to the board", () => {
    describe("nextFreeSpot", () => {
        it("in an empty board the next free spot is 0", () => {
            const expected = 1;
            const board = emptyBoard(2, 2)
            const result = nextFreeSpot(board, 0)

            expect(result).toEqual(expected)
        })

        it("in a row with 1 piece, the next free spot is 1", () => {
            const expected = 0;

            const board: Board = [
                [{ type: "empty-spot" }, { type: "filled-spot", color: 'red' }],
                [{ type: "empty-spot" }, { type: "empty-spot" }]
            ]
            const result = nextFreeSpot(board, 0)

            expect(result).toEqual(expected)
        })

        it("in a filled row it returns -1", () => {
            const expected = -1;

            const board: Board = [
                [{ type: "filled-spot", color: 'blue' }, { type: "filled-spot", color: 'red' }],
                [{ type: "empty-spot" }, { type: "empty-spot" }]
            ]
            const result = nextFreeSpot(board, 0)

            expect(result).toEqual(expected)
        })
    })

    it('adds a piece to an empty board', () => {
        const expected: Board = [
            [{ type: "empty-spot" }, { type: "empty-spot" }],
            [{ type: "empty-spot" }, { type: "filled-spot", color: "red" }]
        ]

        let board = emptyBoard(2, 2)
        board = addPiece(board, "red", 1)

        expect(board).toEqual(expected)
    })

    describe("error states", () => {
        it("throws an error when the row is full", () => {
            const board: Board = [
                [{ type: "filled-spot", color: 'blue' }, { type: "filled-spot", color: 'red' }],
                [{ type: "empty-spot" }, { type: "empty-spot" }]
            ]

            expect(() =>
                addPiece(board, "red", 0)
            ).toThrow(RowFullError);
        })
        it("throws an error when the row is less than 0", () => {
            const board = emptyBoard(2, 2)
            expect(() =>
                addPiece(board, "red", -1)
            ).toThrow(InvalidRowError);
        })

        it('throws an error when the row is outside the board', () => {
            const board = emptyBoard(2, 2)
            expect(() =>
                addPiece(board, "red", 2)
            ).toThrow(InvalidRowError);
        })
    })
})
