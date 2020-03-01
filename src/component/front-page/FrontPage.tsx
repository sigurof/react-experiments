import React from 'react'
import { WelcomeJumbo } from '../welcome/WelcomeJumbo'
import { LGHorizontal } from '../../bootstrap/list-group/ListGroup'
import { linkConfigs, routeConfigs } from './FrontPageConfig'
import { LinkMenu, PageRenderer } from '../../routing/PagingLinking'

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
