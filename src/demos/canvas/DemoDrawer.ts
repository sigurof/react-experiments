import { CanvasContext } from '../../component/canvas/Canvas'

export interface CanvasDemoProps {
    canvasId: string
    canvasContainerId: string
    fallbackText: string
}
export interface posXY {
    x: number
    y: number
}

enum DrawAction {
    ARC,
    MOVE_TO,
}

interface Pair<T> {
    some: T
    other: T
}

interface PathInstruction {
    draw: (ctx: CanvasRenderingContext2D) => void
}

// interface ArcInstr  extends PathInstruction{
//     pos: posXY,
//     rad: number,
//     startAngle: number,
//     endAngle: number,
//     ac: boolean
// }

interface MoveToInstrProps {
    x: number
    y: number
}

class MoveToInstr implements PathInstruction {
    props: MoveToInstrProps
    constructor(props: MoveToInstrProps) {
        this.props = props
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(this.props.x, this.props.y)
    }
}

interface ArcInstrProps {
    x: number
    y: number
    r: number
    startAngle: number
    endAngle: number
    anticlockwise?: boolean
}

class ArcInstr implements PathInstruction {
    props: ArcInstrProps
    constructor(props: ArcInstrProps) {
        this.props = props
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.arc(
            this.props.x,
            this.props.y,
            this.props.r,
            this.props.startAngle,
            this.props.endAngle,
            this.props.anticlockwise
        )
    }
}

class xyBuilder {
    private x: number
    private y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    dx(dx: number) {
        this.x += dx
    }
    dy(dy: number) {
        this.y += dy
    }
    dxy(dx: number, dy: number) {
        this.x += dx
        this.y += dy
    }
    dpos({ dx, dy }: { dx: number; dy: number }) {
        this.x += dx
        this.y += dy
    }
    build() {
        return { x: this.x, y: this.y }
    }
}

export class Draw {
    private readonly ctx: CanvasRenderingContext2D
    private readonly canvas: HTMLCanvasElement
    private readonly width: number
    constructor({ ctx, canvas }: CanvasContext) {
        this.ctx = ctx
        this.canvas = canvas
        this.width = canvas.width
    }

    rectangularExample({ x, y }: posXY) {
        this.ctx.fillRect(x, y, 100, 100)
        this.ctx.clearRect(x + 20, y + 20, 60, 60)
        this.ctx.strokeRect(x + 25, y + 24, 50, 50)
    }

    triangle() {
        this.ctx.moveTo(75, 50)
        this.ctx.lineTo(100, 75)
        this.ctx.lineTo(100, 25)
        this.ctx.fill()
    }

    randomSquares(n: number) {
        for (let i = 0; i < n; i++) {
            const w = 50
            const h = 50
            this.ctx.fillStyle = randomColor()
            this.ctx.fillRect(
                intBetween(0, this.width - 50),
                intBetween(50, 500),
                w,
                h
            )
        }
    }

    drawSmiley({ x, y }: posXY) {
        const twoPi = Math.PI * 2
        const pi = Math.PI
        const halfPi = Math.PI / 2
        const c = { x, y }
        const instructions: PathInstruction[] = [
            new ArcInstr({
                x: c.x,
                y: c.y,
                r: 50,
                startAngle: 0,
                endAngle: twoPi,
            }),
            new MoveToInstr({ x: c.x, y: c.y }),
            new ArcInstr({ x: x, y: y, r: 25, startAngle: 0, endAngle: twoPi }),
        ]

        // instructions.forEach((it, index) => it.draw(this.ctx))
        const incs = [{ x: 0, y: -10 }]
        this.ctx.beginPath()
        this.ctx.arc(c.x, c.y, 50, 0, twoPi, true) // Outer circle
        this.ctx.moveTo(c.x + 5, c.y + incs[0].y - 5)
        this.ctx.arc(c.x + 5, c.y + incs[0].y, 5, -halfPi, halfPi, false) // Mouth (clockwise)
        this.ctx.moveTo(c.x - 10, c.y - 10)
        this.ctx.arc(c.x - 15, c.y - 10, 5, 0, Math.PI * 2, true) // Left eye
        this.ctx.moveTo(c.x + 20, c.y - 10)
        this.ctx.arc(c.x + 15, c.y - 10, 5, 0, Math.PI * 2, true) // Right eye
        this.ctx.stroke()
    }

    in(col: string, drawFunc: () => void) {
        this.ctx.fillStyle = col
        drawFunc()
    }

    drawLine(from: posXY, to: posXY) {
        this.ctx.beginPath()
        this.ctx.moveTo(from.x, from.y)
        this.ctx.lineTo(to.x, to.y)
        this.ctx.stroke()
    }

    horizontal(x0: number, x1: number, y: number) {
        this.drawLine({ x: x0, y }, { x: x1, y })
    }

    drawCMajor({ x, y }: posXY, dim: number) {
        const wBack = dim
        const hBack = dim
        const wBord = dim
        const hBord = dim
        const padFraction = 6
        const padding = dim / padFraction
        const paddedLeft = x + padding
        const paddedRight = x + wBord - padding
        const yStartingPoints = [
            { name: 'topPadStart', value: 0.0 }, // 0.05
            { name: 'topPartStart', value: 0.07 }, // 0.15
            { name: 'fretsStart', value: 0.25 }, // 0.50
            { name: 'stringTrailStarts', value: 0.82 }, // 0.05
            { name: 'bottomPartStarts', value: 0.88 }, // 0.05
            { name: 'bottomPadStarts', value: 0.93 }, // 0.20
        ].map(it => ({
            ...it,
            value: it.value * dim + y,
        }))
        const lineCoords = yStartingPoints.map(it => ({
            from: { x: paddedLeft, y: it.value },
            to: { x: paddedRight, y: it.value },
        }))
        const topLeft = { x, y }

        const topRight = plus(topLeft, { x: wBord, y: 0 })
        const bottomLeft = plus(topLeft, { x: 0, y: hBord })
        const bottomRight = plus(topLeft, { x: wBord, y: hBord })
        const neckTopLeft = plus(topLeft, { x: padding, y: padding })
        const neckTopRight = plus(topRight, { x: -padding, y: padding })
        const lightGrey = 'rgb(230, 230, 230)'
        const grey = 'rgb(150, 150, 150)'
        const black = 'rgb(0, 0, 0)'
        this.in(lightGrey, () => this.ctx.fillRect(x, y, wBack, hBack))
        this.in(black, () => this.ctx.strokeRect(x, y, wBord, hBord))
        this.in(black, () => this.drawLine(topLeft, bottomRight))
        this.ctx.strokeStyle= grey
        lineCoords.forEach(it => this.drawLine(it.from, it.to))
        // this.in(black, () => this.drawLine(neckTopLeft, neckTopRight))
        // this.in(black, () => this.drawLine())
    }
}

function plus(some: posXY, other: posXY) {
    return { x: some.x + other.x, y: some.y + other.y }
}

function randomColor(): string {
    const values = 'r,g,b'
        .split(',')
        .map(_ => intBetween(0, 255))
        .join(', ')
    return `rgb(${values})`
}

function intBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (+max - +min)) + +min
}
