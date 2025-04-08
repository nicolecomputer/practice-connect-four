import { emptyBoard } from "./connect-four";
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
