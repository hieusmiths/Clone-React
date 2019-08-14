import React, { Component } from 'react'
import { connect } from 'react-redux'
import SeachResult from '../../components/SearchResult/SeachResult';
import SearchResultItem from './../../layout/items/search-result/SearchIResultItem'
import { fetchCountPostByKeyword_API }  from './../../services/actions/post'

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            currentPage: 0,
            totalPage:1,
        }
        this.fetchTotalPage()
    }
    static defaultProps = {
        searchResult: []
    }

    render() {
        console.log(this.state.totalPage)
        return (
            <SeachResult>
                { this.fillResultItem() }
            </SeachResult>
        )
    }

    fillResultItem = () => {
        const { searchResult } = this.props
        return searchResult.map((data) => {
            return <SearchResultItem data = { data } />
        })
    }

    fetchTotalPage = () => {
        this.props.getTotalPage()
        this.setState({
            totalPage: this.props.totalPage
        })
    }

    fetchDataPage = (pageNumber) => {
        

    }
}

const mapStateToProps = (state) => ({
    totalPage: state.navigationPost.totalPage
})

const mapDispatchToProps = dispath => {
    return {
        getTotalPage: () => dispath(fetchCountPostByKeyword_API),
        fetchDataPage: (payload) => {
            dispath(fetchCountPostByKeyword_API(payload))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)
