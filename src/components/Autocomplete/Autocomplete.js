import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import styles from './style.module.scss'
import './style.module.scss'
export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  static defaultProps = {
    default: ''
  }
  state = {
    activeOption: -1,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    maxSuggest: this.props.maxSuggest,
  };
  searchRef = React.createRef()
  onChange = (e) => {
    const userInput = e.currentTarget.value;
    const { suggestions, field } = this.props;
    if(userInput.trim().length === 0 || userInput.length === 0) {
      this.setState({
        userInput: ''
      })
      return;
    }
    this.setState({
      // filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    },() => {this.props.search(this.state.userInput)});
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = async (e) => {
    if(this.state.userInput === '' ){
      return;
    }
    const { activeOption,  maxSuggest } = this.state;
    const listDom = document.querySelectorAll('ul.options li')
    if (e.keyCode === 13) {
      await this.setState({
        activeOption: 0,
        showOptions: false,
      });
      this.props.callBackEnter(listDom[activeOption].innerHTML)
    } else if (e.keyCode === 38) {
      if (activeOption === 0 ) {
        return;
      }
      const userInput = listDom[activeOption -1].innerText
      console.log(userInput)
      await this.setState({ activeOption: activeOption - 1, userInput });
    } else if (e.keyCode === 40) {
      if (activeOption === maxSuggest - 1) {
        return;
      }
      const userInput = listDom[activeOption +1].innerText
      console.log(userInput)
      await this.setState({ activeOption: activeOption + 1 , userInput});
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      props: {keyword},
      state: { activeOption, filteredOptions, showOptions, userInput, maxSuggest }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (this.props.suggestions) {
        optionList = (
          <ul className="options">
            {this.props.suggestions.slice(0, 5).map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={index} onClick={onClick}>
                  {optionName.title} 
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>Không tìm thấy kết quả</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className={"border-none form-control border-radius-none " + styles.focusNone + ' ' + styles.boxShadownNone} id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} 
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={keyword}
            ref = { this.searchRef }
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  keyword: state.search.keyword,
  suggestions: state.search.suggestions
})

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Autocomplete)
