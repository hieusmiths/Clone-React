import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {  getSuggestion, updateKeySearch }  from './../../../services/actions/post'
import './style.scss';
export class Autocomplete extends Component {
  searchRef = React.createRef();
  static defaultProps = {
    pathRedirect: '/result'
  }
  state = {
    activeOption: -1,
    filteredOptions: [],
    showOptions: true,
    keyword: null,
    maxSuggest: this.props.maxSuggest,
    isRedirect: false,
  };
  searchRef = React.createRef()
  onChange = (e) => {
    const keyword = e.target.value;
    console.log(e.target.value)
    if(keyword.trim().length === 0 || keyword.length === 0) {
      this.setState({
        keyword: ''
      })
      return;
    }
    this.setState({
      showOptions: true,
      keyword: e.currentTarget.value
    }, () => this.props.getSuggestion(keyword));
    
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      keyword: e.currentTarget.innerText
    });
  };
  onKeyDown =  async (e) => {
    let { activeOption } = this.state;
    const {suggestions} = this.props
    if(e.currentTarget.value.trim().length === 0){
      return
    }
    if (e.key === 'Enter' ) {
      const keyword = this.state.keyword
      await this.setState({
        activeOption: 0,
        showOptions: false,
        isRedirect: true,
        pathRedirect: `${this.props.pathRedirect}?keyword=${keyword}&page=${this.props.page}`,
      });
      this.props.updateKeySearch(e.currentTarget.value)
    } else if (e.keyCode === 38) { // UP
      if (activeOption === 0 || activeOption === -1) {
        activeOption = suggestions.length  - 1;
      } else {
        activeOption = this.state.activeOption - 1;
      }
      const keyword = suggestions[activeOption].title
      await this.setState({ activeOption, keyword });
    } else if (e.keyCode === 40) { // Down
      if (activeOption === suggestions.length  - 1) {
        activeOption = 0
      } else {
        activeOption = this.state.activeOption + 1;
      }
      const keyword = suggestions[activeOption].title
      await this.setState({activeOption, keyword });
    }
    this.props.getSuggestion(this.state.keyword)
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeOption, showOptions, keyword }
    } = this;
    console.log(this.props.suggestions)
    let optionList;
    if (showOptions && keyword) {
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
        {this.state.isRedirect && <Redirect to={ this.state.pathRedirect } />}
        <div className="search">
          <input
            type="text"
            className={"border-none form-control border-radius-none "} id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} 
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={this.props.keyword}
            ref = {  this.searchRef }
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  keyword: state.search.keyword,
  suggestions: state.search.suggestions,
  page: state.search.page
})

const mapDispatchToProps = dispatch => {
  return {
    getSuggestion: (payload) => {
      dispatch(getSuggestion(payload))
    },
    updateKeySearch: (keyword) => {
      dispatch(updateKeySearch(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Autocomplete)
