import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './views/Home'

const RootRouter = () =>(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
)
export default RootRouter