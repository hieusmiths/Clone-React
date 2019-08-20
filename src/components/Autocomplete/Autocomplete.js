import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './style.module.scss'
import './style.scss'
export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    maxSuggest: this.props.maxSuggest,
    isFirst: true
  };
  searchRef = React.createRef()
  onChange = (e) => {
    const userInput = e.currentTarget.value;
    if(userInput.trim().length === 0 || userInput.length === 0) {
      this.setState({
        userInput: ''
      })
      return;
    }
    this.props.search(this.state.userInput)
    const { suggestions } = this.props;
    const filteredOptions = suggestions.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
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
    if(this.state.userInput === ''){
      return;
    }
    const { activeOption, filteredOptions, maxSuggest, isFirst } = this.state;
    if(filteredOptions.length === 0) return;
    const listDom = document.querySelectorAll('ul.options li')
    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: this.searchRef.current.value
      });
      // this.props.search(this.searchRef.current.value)
      this.props.callBackEnter(this.searchRef.current.value)
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      const userInput = listDom[activeOption -1].innerText
      console.log(userInput)
      this.setState({ activeOption: activeOption - 1, userInput });
    } else if (e.keyCode === 40) {
      if (activeOption === maxSuggest - 1) {
        return;
      }
      const userInput = listDom[activeOption +1].innerText
      console.log(userInput)
      this.setState({ activeOption: activeOption + 1 , userInput});
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
                  {optionName} {index}
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
            className={"border-none form-control border-radius-none " } id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} 
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            ref = { this.searchRef }
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
