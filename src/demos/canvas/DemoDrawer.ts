import { CanvasContext } from '../../component/canvas/Canvas'


export interface CanvasDemoProps {
    canvasId: string
    canvasContainerId: string
    fallbackText: string
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
