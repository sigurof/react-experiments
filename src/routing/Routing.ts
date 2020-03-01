import React, { MouseEventHandler } from 'react'

export interface LinkConfig {
    link: string
    displayName: string
    exact?: boolean
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export interface RouteConfig {
    path: string
    component: React.FC // TODO Enable more here?
}
