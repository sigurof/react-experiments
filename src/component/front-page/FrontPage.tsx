import React from 'react'
import { WelcomeJumbo } from '../welcome/WelcomeJumbo'
import { NavLink, Route, Switch } from 'react-router-dom'
import { LGHorizontal } from '../../bootstrap/list-group/ListGroup'
import { linkConfigs, routeConfigs } from './FrontPageConfig'

export const FrontPage: React.FC = () => {
    return (
        <div>
            <WelcomeJumbo />
            <nav>
                <LGHorizontal>
                    <NavigationalLinksRenderer />
                </LGHorizontal>
            </nav>
            <PageRenderer />
        </div>
    )
}

const NavigationalLinksRenderer: React.FC = () => {
    return (
        <React.Fragment>
            {linkConfigs.map((it, index) => (
                <NavLink
                    key={index}
                    exact={it.exact}
                    to={it.link}
                    activeClassName="active"
                    className="list-group-item list-group-item-action"
                >
                    {it.displayName}
                </NavLink>
            ))}
        </React.Fragment>
    )
}

const PageRenderer: React.FC = () => {
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
