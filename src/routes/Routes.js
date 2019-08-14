import { Route } from "react-router-dom";
import React, { Component } from 'react'

import Home from './../components/Home/Home'
import SearchResultContainer from "../containers/search-result-container/SearchResultContainer";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component = { Home } />
                <Route path='/search' component = { SearchResultContainer } />
            </div>
        )
    }
}
