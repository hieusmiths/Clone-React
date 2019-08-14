import { Route } from "react-router-dom";

import React, { Component } from 'react'

import Home from './../components/Home/Home'
import SeachResult from "../components/SearchResult/SeachResult";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component = { Home } />
                <Route path='/search' component = { SeachResult } />
            </div>
        )
    }
}
