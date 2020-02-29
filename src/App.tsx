import React from 'react'
import { FrontPage } from './component/front-page/FrontPage'
import { BrowserRouter as Router } from 'react-router-dom'

function App(): React.FunctionComponentElement<any> {
    return (
        <Router>
            <FrontPage />
        </Router>
    )
}

export default App
