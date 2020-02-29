import React from 'react'
import {
    LGI,
    LGIActionButton,
} from '../../bootstrap/list-group/list-group-item/ListGroupItem'
import { LGHorizontal } from '../../bootstrap/list-group/ListGroup'

export function ListGroupPractice1(): React.FunctionComponentElement<null> {
    return (
        <div>
            <LGHorizontal>
                <LGI>Hello</LGI>
                <LGI>Hello</LGI>
                <LGI>Hello</LGI>
            </LGHorizontal>
            <LGHorizontal>
                <LGIActionButton active={true}>hei1</LGIActionButton>
                <LGIActionButton disabled={true}>hei2</LGIActionButton>
                <LGIActionButton>hei</LGIActionButton>
                <LGIActionButton>hei</LGIActionButton>
            </LGHorizontal>
        </div>
    )
}
