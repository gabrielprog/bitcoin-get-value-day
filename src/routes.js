import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Register from './pages/Register';
import Bitcoin from './pages/Bitcoin';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Register} />
                <Route path='/bitcoin' component={Bitcoin} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
