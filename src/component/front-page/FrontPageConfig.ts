import { Chords } from '../../demos/chords/Chords'
import { CANVAS_PAGE, CHORDS_PAGE, FRONT_PAGE } from '../../routing/routes'
import { LinkConfig, RouteConfig } from '../../routing/Routing'

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
    }
]
