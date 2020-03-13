import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Favorites from "./favorites";
import Album from "./album-page";
import Header from "./header"
import All from "./all";

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/favalbum" component={Favorites} />
                <Route path="/album/:albumId" component={Album} />
                <Route path="/all" component={All} />
            </Switch>
        </Router>
    )
}

export default Navigation;
