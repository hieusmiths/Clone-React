import React, { Component } from 'react'
import PropTypes from "prop-types";
import './style.scss'
export default class Autocomplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: this.props.suggestions
        }
 
    }
    static propsTypes = {
        suggestions: PropTypes.instanceOf(Array),
        isSuggestion: PropTypes.instanceOf(Boolean)
    }

    static defaultProps = {
        suggestions: [],
        isSuggestion: false,
        searchText: ''
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            suggestions: nextProps.suggestions
        })
    }
    callback = (payload) => {
        return this.props.callback(payload)
    }
    render() {
        return (
            <React.Fragment>

               {
                this.props.searchText.length > 0 ? (
                    this.state.suggestions.map((item, i) => {
                return <li key= {i} onClick = { () => this.callback(item._id) }> { item.name } </li>
                    })
                ) : ''
               }
            </React.Fragment>
        )
    }
}
