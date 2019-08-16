import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDataPageNumber } from './../../services/actions/post'
import { thisExpression } from '@babel/types';

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
        console.log(totalPage, this.props.totalResult / this.props.max)
        return (
            <div className="rp-search-result__pagination">
                <div className="search-result__pagination-container container">
                    <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
                    <div className="sr-pagination__items d-flex align-items-center">
                        <a disabled = { currentPage === 1 ? 'disabled' : false } onClick={ this.prevPage } className="sr-pagination--btn sr-pagination--previous" href="/#">Tr&#x1B0;&#x1EDB;c</a>
                        { this.genPagination() }
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
    setActive = () => {

    }

    genPagination = () => {
        const {maxPaginationDisplay, currentPage, totalPage} = this.state
        if(currentPage > 4) {

        }
        let result = []
        for(let i = currentPage; i <= maxPaginationDisplay; i ++) {
            const x = <a key={i} onClick={ (e) => this.callback(e, i) } className={"sr-pagination--item " + (currentPage === i ? ' is-actived' : ' ') } href="/#">{i}</a>
            result.push(x)
        }
        if(totalPage > maxPaginationDisplay) {
            result.push(<p>...</p>)
        result.push(<a key={totalPage} onClick={ (e) => this.callback(e, totalPage) } className={"sr-pagination--item " + (currentPage === totalPage ? ' is-actived' : ' ') } href="/#">{totalPage}</a>)
        }
        return result
    }
}

const mapStateToProps = (state) => ({
    total_search: state.navigationPost.total_search,
})

const mapDispatchToProps = dispath => {
    return {
        getData: (pageNumber) => dispath(fetchDataPageNumber(pageNumber)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

