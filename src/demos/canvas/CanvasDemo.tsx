import React from 'react'
import './CanvasDemo.css'

import { TextGetter } from '../../config/texts'
import { LG } from '../../bootstrap/list-group/ListGroup'

import { canvasLinks, canvasRoutes } from '../../routing/routes'
import { LinkMenu, PageRenderer } from '../../routing/PagingLinking'
import { Canvas, CanvasContext } from '../../component/canvas/Canvas'
import { ChordRenderer, Draw } from './DemoDrawer'

const CANVAS_ID = 'my-first-canvas'
const CANVAS_CONTAINER_ID = `canvas-container-${CANVAS_ID}`

const t = new TextGetter(
    {
        'canvas-fallback-message': 'Unable to display content.',
    },
    '[Content missing]'
)

export const ExperimentCanvas: React.FC = () => (
    <Canvas
        draw={experimentDraw}
        fallbackText={t.get('canvas-fallback-text')}
        canvasId={CANVAS_ID}
        canvasContainerId={CANVAS_CONTAINER_ID}
    />
)

export const SquaresCanvas: React.FC = () => (
    <div id="squares-wrapper">
        <Canvas
            draw={drawToCanvas}
            fallbackText={t.get('canvas-fallback-text')}
            canvasId={CANVAS_ID}
            canvasContainerId={CANVAS_CONTAINER_ID}
        />
    </div>
)

function drawToCanvas({ ctx, canvas }: CanvasContext) {
    const d = new Draw({ ctx, canvas })
    d.triangle()
    d.randomSquares(50)
}

function experimentDraw({ ctx, canvas }: CanvasContext) {
    const d = new Draw({ ctx, canvas })
    const c = new ChordRenderer({ctx, canvas})
    d.rectangularExample({ x: 50, y: 50 })
    d.drawSmiley({ x: 250, y: 75 })
    c.drawCMajor({ x: 50, y: 250 }, 500)
}

export const CanvasDemo: React.FC = () => {
    console.log('Canvas')
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-2">
                    <nav>
                        <LG>
                            <LinkMenu linkConfigs={canvasLinks} />
                        </LG>
                    </nav>
                </div>
                <div className="col-10">
                    <PageRenderer routeConfigs={canvasRoutes} />
                </div>
            </div>
        </React.Fragment>
    )
}
