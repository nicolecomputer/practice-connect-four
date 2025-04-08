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


function emptyRow(depthOfRow: number): Row {
    return new Array<Spot>(depthOfRow).fill({ type: "empty-spot" })
}

export function emptyBoard(numberOfRows: number, depthOfRows: number): Board {
    return new Array<Row>(numberOfRows).fill(emptyRow(depthOfRows))
}
