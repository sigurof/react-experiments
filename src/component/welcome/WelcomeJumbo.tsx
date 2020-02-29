import React from 'react'
import { TextGetter } from '../../config/texts'

const t = new TextGetter(
    {
        h1: 'Welcome!',
        'p-about-contents':
            'This page contains my different React experiments.',
        'p-welcome-to-explore':
            'You are welcome to explore by clicking the buttons.',
        'a-button': 'A button',
    },
    '[Content missing]'
)

export const WelcomeJumbo: React.FC = () => (
    <React.Fragment>
        <div className="jumbotron">
            <h1 className="display-4">{t.get('h1')}</h1>
            <p className="lead">{t.get('p-about-contents')}</p>
            <hr className="my-4" />
            <p>{t.get('p-welcome-to-explore')}</p>
            <a
                className="btn btn-primary btn-lg"
                href="#jumbotron"
                role="button"
            >
                {t.get('a-button')}
            </a>
        </div>
    </React.Fragment>
)
