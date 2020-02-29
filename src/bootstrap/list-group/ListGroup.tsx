import React from 'react'

export const LG: React.FC = ({ children }) => (
    <div className="list-group">{children}</div>
)

interface LGHorizontalProps {
    id?: string
    role?: string
    children?: React.ReactChild | React.ReactChild[]
}

export const LGHorizontal: React.FC<LGHorizontalProps> = ({
    id,
    role,
    children,
}: LGHorizontalProps) => (
    <ul className="list-group list-group-horizontal" id={id} role={role}>{children}</ul>
)
