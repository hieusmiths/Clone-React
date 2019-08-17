import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss'
export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    maxSuggest: this.props.maxSuggest
  };

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    this.props.search(e)
    const filteredOptions = suggestions.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
      this.props.callBackEnter(e)
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1, userInput: e.currentTarget.value });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 , userInput: e.currentTarget.value});
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput, maxSuggest }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.slice(0, maxSuggest).map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={index} onClick={onClick}>
                  {optionName}
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
            value={userInput}
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
