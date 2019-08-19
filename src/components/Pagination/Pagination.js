import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDataPageNumber } from './../../services/actions/post'

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 0,
            totalPage: 1,
            currentPage: 1,
            maxPaginationDisplay: 9,
            pagination: null,
          };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.totalResult,
            totalPage: Math.ceil(nextProps.totalResult / nextProps.max)
        })
    }
    
    
    render() {
        const {currentPage, totalPage} = this.state;
        return (
            <div className="rp-search-result__pagination">
                <div className="search-result__pagination-container container">
                    <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
                    <div className="sr-pagination__items d-flex align-items-center">
                        <a disabled = { currentPage === 1 ? 'disabled' : false } onClick={ this.prevPage } className="sr-pagination--btn sr-pagination--previous" href="/#">Tr&#x1B0;&#x1EDB;c</a>
                        { this.genPagination(currentPage) }
                        </div> 
                        <a disabled = { currentPage === totalPage ? 'disabled' : false } onClick={ this.nextPage } className="sr-pagination--btn sr-pagination--next" href="/#">Ti&#x1EBF;p</a>
                    </div>
                </div>
            </div>
        )
    }
    
    callback = (e, pageNumber) => {
        e.preventDefault()
        this.setState({currentPage: pageNumber})
        this.props.callbackPagination(pageNumber)
    }

    nextPage = (e) => {
        e.preventDefault()
        if(this.state.currentPage === this.state.maxPaginationDisplay) return
        const pageNumber = this.state.currentPage + 1;
        this.callback(e, pageNumber)
        this.setState({currentPage: pageNumber})
    }
    prevPage = (e) => {
        e.preventDefault()
        if(this.state.currentPage === 1) return
        const pageNumber = this.state.currentPage - 1;
        this.callback(e, pageNumber)
        this.setState({currentPage: this.state.currentPage - 1})
    }

    genPagination = (current) => {
        const range = this.state.maxPaginationDisplay; const pages = this.state.totalPage; const  start = 1
        const paging = []; 
        var i = Math.min(pages + start - range, Math.max(start, current - (range / 2 | 0)));
        const end = i + range;
        if(i<1) i = 1;
        for(let j = i; j < end; j ++) {
            paging.push(<a key={j} onClick={ (e) => this.callback(e, j) } className={"sr-pagination--item " + (j === current ? ' is-actived' : ' ') } href="/#">{j}</a>) 
        }
        return paging;
    }
}


export default Pagination;

