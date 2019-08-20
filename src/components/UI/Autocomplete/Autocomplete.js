import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {  getSuggestion, updateKeySearch }  from './../../../actions/search'
import './style.scss';
export class Autocomplete extends Component {
  searchRef = React.createRef();
  static defaultProps = {
    pathRedirect: '/result'
  }
  state = {
    activePosition: -1,
    filteredOptions: [],
    showOptions: true,
    keyword: this.props.keyword,
    maxSuggest: this.props.max,
    isRedirect: false,
  };
  onChange = (e) => {
    const keyword = e.currentTarget.value;
    this.props.updateKeySearch(keyword)
    if(keyword.trim().length === 0 || keyword.length === 0) {
      this.setState({
        keyword: ''
      })
      return;
    }
    this.setState({
      showOptions: true,
      keyword
    })
    this.props.getSuggestion(keyword)
    
    
  };

  onClick = (e) => {
    this.setState({
      activePosition: 0,
      showOptions: false,
      keyword: e.currentTarget.innerText,
      isRedirect: true,
      pathRedirect: `${this.props.pathRedirect}?keyword=${e.currentTarget.innerText}&page=1`,
    });
    this.props.updateKeySearch(this.state.keyword)
  };
  onKeyDown =  async (e) => {
    let { activePosition, keyword } = this.state;
    const {suggestions} = this.props
    if (e.key === 'Enter' ) {
      await this.setState({
        showOptions: false,
        keyword,
        isRedirect: true,
        pathRedirect: `${this.props.pathRedirect}?keyword=${keyword}&page=1`,
      });
      this.props.updateKeySearch(this.state.keyword)
    } else if (e.key == 'ArrowUp') { // UP
      if (activePosition === 0 || activePosition === -1) {
        activePosition = suggestions.length  - 1;
      } else {
        activePosition = this.state.activePosition - 1;
      }
      const keyword = suggestions[activePosition].title
      await this.setState({ activePosition, keyword });
    } else if (e.key == 'ArrowDown') { // Down
      if (activePosition === suggestions.length  - 1) {
        activePosition = 0
      } else {
        activePosition = this.state.activePosition + 1;
      }
      const keyword = suggestions[activePosition].title
      await this.setState({activePosition, keyword });
    }
    this.currentValue(activePosition)
  };


  currentValue = async value => {
    if (value >= 0 && value < this.props.suggestions.length) {
      let keyword = this.props.suggestions[value].title;
      this.props.updateKeySearch(keyword)
      await this.setState({
        keyword: keyword
      });
    }
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activePosition, showOptions, keyword }
    } = this;
    let optionList;
    if (showOptions && keyword) {
      if (this.props.suggestions) {
        optionList = (
          <ul className="options">
            {this.props.suggestions.slice(0, 5).map((optionName, index) => {
              let className;
              if (index === activePosition) {
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
            // ref = {  this.searchRef }
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  keyword: state.search.keyword,
  suggestions: [{title: 'hieu'},{ title: 'minh' },{ title: 'con'}],//state.search.suggestions,
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
