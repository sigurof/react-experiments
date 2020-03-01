import React, { useEffect, useState } from 'react'

export type CanvasContext = {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
}

interface CanvasProps {
    draw: (canvasContext: CanvasContext) => void
    fallbackText: string
    canvasId: string
    canvasContainerId: string
}

interface contextAndDraw {
    canvasContext: CanvasContext | null
    draw: (canvasContext: CanvasContext) => void
    canvasContainerId?: string
}

export const Canvas: React.FC<CanvasProps> = ({
    draw,
    fallbackText,
    canvasId,
    canvasContainerId,
}: CanvasProps) => {
    const canvasContext = useCanvasAndContext(canvasId)
    useDrawOnce({ canvasContext, draw })
    useDrawOnResize({ canvasContext, draw, canvasContainerId })
    return (
        <div>
            <div id={canvasContainerId}>
                <canvas id={canvasId} height={1000}>
                    {fallbackText}
                </canvas>
            </div>
        </div>
    )
}

function useCanvasAndContext(canvasId: string) {
    const [canvasContext, setCanvasContext] = useState(
        (): {
            canvas: HTMLCanvasElement
            ctx: CanvasRenderingContext2D
        } | null => null
    )
    useEffect(() => {
        const cv = document.getElementById(canvasId) as HTMLCanvasElement
        const ct = cv?.getContext('2d') as CanvasRenderingContext2D
        setCanvasContext({
            canvas: cv,
            ctx: ct,
        })
    }, [canvasId])
    return canvasContext
}

function useDrawOnce({ canvasContext, draw }: contextAndDraw) {
    useEffect(() => {
        if (!!canvasContext?.ctx) draw(canvasContext)
    }, [draw, canvasContext])
}

function useDrawOnResize({
    canvasContext,
    draw,
    canvasContainerId,
}: contextAndDraw) {
    const [w, setW] = useState(0)
    useEffect(() => {
        let canvasContainerElement = document.getElementById(
            canvasContainerId!!
        ) as HTMLElement
        window.addEventListener('resize', () => {
            if (!!canvasContainerElement)
                setW(canvasContainerElement?.clientWidth)
        })
    }, [canvasContainerId])
    useEffect(() => {
        let canvasContainerElement = document.getElementById(
            canvasContainerId!!
        ) as HTMLElement
        if (!!canvasContext?.canvas && !!canvasContext?.ctx)
            resizeCanvas(canvasContext, canvasContainerElement, draw)
    }, [w, draw, canvasContext, canvasContainerId])
}

function resizeCanvas(
    { canvas, ctx }: CanvasContext,
    canvasContainer: HTMLElement,
    draw: (canvasContext: CanvasContext) => void
) {
    canvas.width = canvasContainer.clientWidth - 2
    window.requestAnimationFrame(() => draw({ canvas, ctx }))
}
