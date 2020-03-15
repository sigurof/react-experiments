import React from 'react'
import { FrontPage } from './component/front-page/FrontPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CanvasDemo } from './demos/canvas/CanvasDemo'
import { CANVAS_PAGE, HOME_PAGE } from './routing/routes'

function App(): React.FunctionComponentElement<any> {
    return (
        <Router>
            <Route path={HOME_PAGE}>
                <FrontPage/>
            </Route>
            <Route path={CANVAS_PAGE}>
                <CanvasDemo />
            </Route>
        </Router>
    )
}

export default App
