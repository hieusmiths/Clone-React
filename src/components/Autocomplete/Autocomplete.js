import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
        isSuggestion: false
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            suggestions: nextProps.suggestions
        })
    }
    
    render() {
        return (
            <React.Fragment>
                { 
                    this.state.suggestions.map((item, i) => {
                        console.log(this.state.suggestions)
                        return (
                            <option key={i} value={ item.keyword } />
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
