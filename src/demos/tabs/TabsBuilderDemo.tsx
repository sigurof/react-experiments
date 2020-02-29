import React from 'react'
import { getTextGlobal } from '../../config/texts'
import { TabsBuilder } from '../../bootstrap/list-group/tab/Tab'
import { LGHorizontal } from '../../bootstrap/list-group/ListGroup'

export function TabsBuilderDemo(): React.FunctionComponentElement<any> {
    const names = 'c d e f g a h'
        .split(' ')
        .map(it=>`${it}-dur`)
    const config = names.map(it => ({
        name: it,
        tabId: `tab-${it}`,
        paneId: `pane-${it}`,
        tabText: getTextGlobal(`no.sigurof.tab.text.${it}`),
        paneText: getTextGlobal(`no.sigurof.tab.pane.text.${it}`),
    }))

    const tabs = new TabsBuilder()
        .setConfig(config)
        .setTabs(tabs => <div className="col-4">{tabs}</div>)
        .setPanes(panes => <div className="col-8">{panes}</div>)
        .build()
    const tabs2 = new TabsBuilder()
        .setConfig(config)
        .setTabs(tabs=><LGHorizontal id="list-tab" role="tablist">{tabs}</LGHorizontal>)
        .setPanes(panes=><LGHorizontal>{panes}</LGHorizontal>)
        .build()
    return (
        <div>
            <div>{tabs}</div>
        </div>
    )
}
