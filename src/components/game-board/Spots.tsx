import { Color } from "../../lib/connect-four"

export function EmptySpot() {
    return (
        <div className="game-board-spot empty-spot">

        </div>
    )
}

type FilledSpotProps = {
    color: Color
}

export function FilledSpot({ color }: FilledSpotProps) {
    return (
        <div className="game-board-spot filled-spot">
            <div className={`game-piece piece-${color}`}></div>
        </div>
    )
}
