import React from 'react'
import { LGIActionA } from '../list-group-item/ListGroupItem'

type TabConfig = {
    tabId: string
    tabText: string
    name: string
    paneText: string
    paneId: string
}

interface LGITabsProps {
    config: TabConfig[]
}

class TabPanes {
    static Tabs: React.FC<LGITabsProps> = ({ config }) => (
        <React.Fragment>
            {config.map((it, index) => (
                <LGIActionA
                    id={it.tabId}
                    href={`#${it.paneId}`}
                    ariaControls={it.name}
                    key={index}
                >
                    {it.tabText}
                </LGIActionA>
            ))}
        </React.Fragment>
    )

    static Panes: React.FC<LGITabsProps> = ({ config }) => (
        <div className="tab-content" id="nav-tabContent">
            {config.map((it, index) => (
                <div
                    className="tab-pane fade show"
                    id={it.paneId}
                    role="tabpanel"
                    aria-labelledby={it.tabId}
                    key={index}
                >
                    {it.paneText}
                </div>
            ))}
        </div>
    )
}

export class TabsBuilder {
    config: TabConfig[] | null = null
    tabsComp: React.FunctionComponentElement<any> | null = null
    panesComp: React.FunctionComponentElement<any> | null = null

    assertConfigset() {
        if (this.config == null) {
            throw Error('Config must be set')
        }
    }

    setConfig(conf: TabConfig[]) {
        this.config = conf
        return this
    }

    setTabs(
        wrapTabs: (
            arg0: React.FunctionComponentElement<any>
        ) => React.FunctionComponentElement<any>
    ) {
        this.assertConfigset()
        this.tabsComp = wrapTabs(<TabPanes.Tabs config={this.config!} />)
        return this
    }

    setPanes(
        wrapPanes: (
            arg0: React.FunctionComponentElement<any>
        ) => React.FunctionComponentElement<any>
    ) {
        this.assertConfigset()
        this.panesComp = wrapPanes(<TabPanes.Panes config={this.config!} />)
        return this
    }

    build() {
        return (
            <React.Fragment>
                {this.tabsComp}
                {this.panesComp}
            </React.Fragment>
        )
    }
}
