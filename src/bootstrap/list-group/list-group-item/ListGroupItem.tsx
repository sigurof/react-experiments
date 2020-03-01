import React from 'react'
import { classnames } from '../../../utils/styling/ClassNames'

interface LGIActionButtonProps {
    active?: boolean
    disabled?: boolean
    children: React.ReactChildren | string
}

export const LGI: React.FC = ({ children }) => (
    <li className="list-group-item">{children}</li>
)

export const LGIActionButton: React.FC<LGIActionButtonProps> = ({
    active,
    children,
    disabled,
}: LGIActionButtonProps) => {
    const className = classnames('list-group-item list-group-item-action', [
        { className: 'active', toUse: !!active },
    ])
    return (
        <button type="button" className={className} disabled={disabled}>
            {children}
        </button>
    )
}

interface LGIActionAProps {
    id: string
    active?: boolean
    href: string
    ariaControls: string
    children: React.ReactChildren | string
}

export const LGIActionA: React.FC<LGIActionAProps> = ({
    id,
    href,
    active,
    ariaControls,
    children,
}: LGIActionAProps) => {
    const className = classnames('list-group-item list-group-item-action', [
        { className: 'active', toUse: !!active },
    ])
    return (
        <a
            id={id}
            href={href}
            className={className}
            data-toggle="list"
            role="tab"
            aria-controls={ariaControls}
        >
            {children}
        </a>
    )
}
