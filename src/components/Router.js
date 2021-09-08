import React from 'react'
import {Switch, Route} from'react-router-dom';
import FrontEnd from './FrontEnd';
import Gallery from './Gallery';
function Router() {
    return (
        <>
         <Switch>
        <Route path={'/'}>
            <FrontEnd/>
        </Route>
        <Route path={'/Gallery'}>
            <Gallery/>
        </Route>
        
    </Switch>
        </>
    )
}

export default Router
