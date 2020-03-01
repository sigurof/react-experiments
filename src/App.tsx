import React from 'react'
import { FrontPage } from './component/front-page/FrontPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CanvasDemo } from './demos/canvas/CanvasDemo'
import { CANVAS_PAGE, FRONT_PAGE } from './routing/routes'

function App(): React.FunctionComponentElement<any> {
    return (
        <Router>
            <Switch>
                <Route path={FRONT_PAGE}>
                    <FrontPage />
                </Route>
                <Route path={CANVAS_PAGE}>
                    <CanvasDemo />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
