import React from 'react'
import './CanvasDemo.css'

import { TextGetter } from '../../config/texts'
import { LG } from '../../bootstrap/list-group/ListGroup'

import { EXPERIMENT_CANVAS_PAGE, FRONT_PAGE, SQUARES_CANVAS_PAGE } from '../../routing/routes'
import { LinkMenu, PageRenderer } from '../../routing/PagingLinking'
import { RouteConfig } from '../../routing/Routing'
import { Canvas, CanvasContext } from '../../component/canvas/Canvas'
import { Draw } from './DemoDrawer'

const CANVAS_ID = 'my-first-canvas'
const CANVAS_CONTAINER_ID = `canvas-container-${CANVAS_ID}`

const t = new TextGetter(
    {
        'canvas-fallback-message': 'Unable to display content.',
    },
    '[Content missing]',
)

const ExperimentCanvas: React.FC = () => (
    <Canvas
        draw={experimentDraw}
        fallbackText={t.get('canvas-fallback-text')}
        canvasId={CANVAS_ID}
        canvasContainerId={CANVAS_CONTAINER_ID}
    />
)

const SquaresCanvas: React.FC = () => (
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
    d.triangle()
    d.randomSquares(50)
}

const canvasRoutes: RouteConfig[] = [
    {
        path: SQUARES_CANVAS_PAGE,
        component: SquaresCanvas,
    },
    {
        path: EXPERIMENT_CANVAS_PAGE,
        component: ExperimentCanvas,
    },
]

const canvasLinks = [
    {
        link: FRONT_PAGE,
        displayName: 'Back to front',
    },
    {
        exact: true,
        link: SQUARES_CANVAS_PAGE,
        displayName: 'Squares',
    },
    {
        link: EXPERIMENT_CANVAS_PAGE,
        displayName: 'Experiment',
    },
]

export const CanvasDemo: React.FC = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-2">
                    <nav>
                        <LG>
                            <LinkMenu linkConfigs={canvasLinks}/>
                        </LG>
                    </nav>
                </div>
                <div className="col-10">
                    <PageRenderer routeConfigs={canvasRoutes}/>
                </div>
            </div>
        </React.Fragment>
    )
}
