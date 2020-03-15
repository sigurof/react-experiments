import { LinkConfig, RouteConfig } from './Routing'
import { Chords } from '../demos/chords/Chords'
import { ExperimentCanvas, SquaresCanvas } from '../demos/canvas/CanvasDemo'

export const HOME_PAGE = '/sigurof/react-experiments/'
export const FRONT_PAGE = HOME_PAGE + 'front/'
export const CANVAS_PAGE = HOME_PAGE + 'canvas/'

export const CHORDS_PAGE = HOME_PAGE + 'chords/'

export const SQUARES_CANVAS_PAGE = CANVAS_PAGE + 'squares/'
export const EXPERIMENT_CANVAS_PAGE = CANVAS_PAGE + 'experiments/'

export const canvasRoutes: RouteConfig[] = [
    {
        path: SQUARES_CANVAS_PAGE,
        component: SquaresCanvas,
    },
    {
        path: EXPERIMENT_CANVAS_PAGE,
        component: ExperimentCanvas,
    },
]

export const canvasLinks = [
    {
        link: HOME_PAGE,
        displayName: 'Back home',
        exact: true,
    },
    {
        link: SQUARES_CANVAS_PAGE,
        displayName: 'Squares',
        exact: true,
    },
    {
        link: EXPERIMENT_CANVAS_PAGE,
        displayName: 'Experiment',
        exact: true,
    },
]


export const linkConfigs: LinkConfig[] = [
    {
        exact: true,
        displayName: 'Front',
        link: FRONT_PAGE,
    },
    {
        displayName: 'Chords',
        link: CHORDS_PAGE,
    },
    {
        displayName: 'Canvas',
        link: CANVAS_PAGE,
    },
]

export const routeConfigs: RouteConfig[] = [
    {
        path: CHORDS_PAGE,
        component: Chords,
    },
]
