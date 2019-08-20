import { BrowserRouter as Router, Switch } from "react-router-dom";

import React, { Component } from 'react'
import Header from "../layout/headers/Header";
import Routes from "../routes/Routes";

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        )
    }
}
