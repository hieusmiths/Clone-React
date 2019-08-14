import { BrowserRouter as Router, Switch } from "react-router-dom";

import React, { Component } from 'react'
import HeaderTop from "../layout/headers/HeaderTop";
import Routes from "../routes/Routes";

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <HeaderTop />
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        )
    }
}
