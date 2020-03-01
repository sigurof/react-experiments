import React, { useEffect, useLayoutEffect, useState } from 'react'
import './CanvasDemo.css'

import { TextGetter } from '../../config/texts'

const t = new TextGetter(
    {
        'canvas-fallback-message': 'Unable to display content.',
    },
    '[Content missing]'
)

const CANVAS_ID = 'my-first-canvas'
const CANVAS_CONTAINER_ID = `canvas-container-${CANVAS_ID}`

interface pr {
    drawFunc: (ctx: CanvasRenderingContext2D) => void
}

export const CanvasDemo: React.FC = () => {
    return <Canvas drawFunc={drawToCanvas} />
}

interface some {
    canvas: HTMLCanvasElement | null | undefined
    ctx: CanvasRenderingContext2D | null | undefined
}
interface cv {
    canvas: HTMLCanvasElement | null
}

function useResizableCanvas(drawFunc: (ctx: CanvasRenderingContext2D) => void) {
    const [w, setW] = useState(0)
    const [canvas, setCanvas] = useState((): HTMLCanvasElement | null => null)
    const [ctx, setCtx] = useState((): CanvasRenderingContext2D | null => null)
    useEffect(() => {
        window.addEventListener('resize', () =>
            setW(
                (document.getElementById(CANVAS_CONTAINER_ID) as HTMLElement)
                    ?.clientWidth
            )
        )
    }, [])
    useEffect(() => {
        const cv = document.getElementById(CANVAS_ID) as HTMLCanvasElement
        const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D
        setCanvas(cv)
        setCtx(ctx)
    }, [canvas, ctx])
    useEffect(() => {
        if (!!ctx) drawFunc(ctx)
    }, [drawFunc, ctx])
    useEffect(() => {
        const canvasContainer = document.getElementById(
            CANVAS_CONTAINER_ID
        ) as HTMLElement
        if (!!canvas && !!ctx)
            resizeCanvas(canvas, canvasContainer, ctx, drawFunc)
    }, [w, drawFunc, canvas, ctx])
}

export const Canvas: React.FC<pr> = ({ drawFunc }: pr) => {
    useResizableCanvas(drawFunc)
    return (
        <div>
            <div id={CANVAS_CONTAINER_ID}>
                <canvas id={CANVAS_ID} height={1000}>
                    {t.get('canvas-fallback-message')}
                </canvas>
            </div>
        </div>
    )
}

function drawToCanvas(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgb(200, 0, 0)'
    ctx.fillRect(50, 50, 50, 50)

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(55, 55, 50, 50)
}

function resizeCanvas(
    canvas: HTMLCanvasElement,
    canvasContainer: HTMLElement,
    ctx: CanvasRenderingContext2D,
    drawFunc: Function
) {
    canvas.width = canvasContainer.clientWidth - 2
    window.requestAnimationFrame(() => drawFunc(ctx))
}
