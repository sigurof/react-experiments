import React, { useEffect, useState } from 'react'
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

export const CanvasDemo: React.FC = () => {
    return <Canvas drawFunc={drawToCanvas} />
}

export const Canvas: React.FC<pr> = ({ drawFunc }: pr) => {
    const [w, setW] = useState(0)
    window.addEventListener('resize', () =>
        setW(
            (document.getElementById(CANVAS_CONTAINER_ID) as HTMLElement)
                ?.clientWidth
        )
    )
    useEffect(() => drawFunc(CANVAS_ID), [drawFunc])
    useEffect(() => resizeCanvas(CANVAS_ID, CANVAS_CONTAINER_ID, drawFunc), [
        w,
        drawFunc,
    ])
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

function drawToCanvas(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.fillStyle = 'rgb(200, 0, 0)'
    ctx.fillRect(50, 50, 50, 50)

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(55, 55, 50, 50)
}

function resizeCanvas(
    canvasId: string,
    canvasContainerId: string,
    drawFunc: Function
) {
    const canvasContainer = document.getElementById(
        canvasContainerId
    ) as HTMLElement
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    canvas.width = canvasContainer.clientWidth - 2
    window.requestAnimationFrame(() => drawFunc(canvasId))
}

interface pr {
    drawFunc: (canvasId: string) => void
}
