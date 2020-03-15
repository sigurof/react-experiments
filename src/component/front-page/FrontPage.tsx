import React from 'react'
import { WelcomeJumbo } from '../welcome/WelcomeJumbo'
import { LGHorizontal } from '../../bootstrap/list-group/ListGroup'
import { LinkMenu, PageRenderer } from '../../routing/PagingLinking'
import { linkConfigs, routeConfigs } from '../../routing/routes'

export const FrontPage: React.FC = () => {
    return (
        <div>
            <WelcomeJumbo />
            <nav>
                <LGHorizontal>
                    <LinkMenu linkConfigs={linkConfigs} />
                </LGHorizontal>
            </nav>
            <PageRenderer routeConfigs={routeConfigs} />
        </div>
    )
}
