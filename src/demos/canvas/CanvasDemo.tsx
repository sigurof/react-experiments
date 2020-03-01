import React from 'react'
import './CanvasDemo.css'

import { TextGetter } from '../../config/texts'
import { Canvas, CanvasContext } from '../../component/canvas/Canvas'

const CANVAS_ID = 'my-first-canvas' // TODO Make these into props
const CANVAS_CONTAINER_ID = `canvas-container-${CANVAS_ID}`

const t = new TextGetter(
    {
        'canvas-fallback-message': 'Unable to display content.',
    },
    '[Content missing]'
)

export const CanvasDemo: React.FC = () => {
    return (
        <Canvas
            draw={drawToCanvas}
            fallbackText={t.get('canvas-fallback-message')}
            canvasId={CANVAS_ID}
            canvasContainerId={CANVAS_CONTAINER_ID}
        />
    )
}

function drawToCanvas({ ctx, canvas }: CanvasContext) {
    const d = new Draw({ ctx, canvas })
    d.triangle()
    d.randomSquares(50)
}

class Draw {
    private readonly ctx: CanvasRenderingContext2D
    private readonly canvas: HTMLCanvasElement
    private readonly width: number
    constructor({ ctx, canvas }: CanvasContext) {
        this.ctx = ctx
        this.canvas = canvas
        this.width = (document.getElementById(
            CANVAS_ID
        ) as HTMLCanvasElement).width
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
            this.ctx.fillRect(intBetween(0, this.width-50), intBetween(50, 500), w, h)
        }
    }
}

function randomColor(): string {
    const vals = 'r,g,b'
        .split(',')
        .map(_ => intBetween(0, 255))
        .join(', ')
    return `rgb(${vals})`
}

function intBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (+max - +min)) + +min
}
