import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./screen/login/login";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path={'/login'} component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
