import React from 'react'
import { Chords } from '../../demos/chords/Chords'
import { CANVAS_PAGE, CHORDS_PAGE, HOME_PAGE } from '../../routing/routes'
import { CanvasDemo } from '../../demos/canvas/CanvasDemo'

interface LinkConfig {
    link: string
    displayName: string
    exact?: boolean
}

interface RouteConfig {
    path: string
    component: React.FC // TODO Enable more here?
}

export const linkConfigs: LinkConfig[] = [
    {
        exact: true,
        displayName: 'Home',
        link: HOME_PAGE,
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
    {
        path: CANVAS_PAGE,
        component: CanvasDemo,
    },
]
