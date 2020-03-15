import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { LinkConfig, RouteConfig } from './Routing'

interface LinkMenuProps {
    linkConfigs: LinkConfig[]
}

interface PageRendererProps {
    routeConfigs: RouteConfig[]
}

export const PageRenderer: React.FC<PageRendererProps> = ({
    routeConfigs,
}: PageRendererProps) => {
    return (
        <Switch>
            {routeConfigs.map((it, index) => (
                <Route key={index} path={it.path}>
                    <it.component />
                </Route>
            ))}
        </Switch>
    )
}

export const LinkMenu: React.FC<LinkMenuProps> = ({
    linkConfigs,
}: LinkMenuProps) => {
    return (
        <React.Fragment>
            {linkConfigs.map((it, index) => {
                return (
                    <NavLink
                        to={it.link}
                        key={index}
                        exact={it.exact}
                        onClick={it.onClick}
                        activeClassName="active"
                        className="list-group-item list-group-item-action"
                    >
                        {it.displayName}
                    </NavLink>
                )
            })}
        </React.Fragment>
    )
}
