import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import SeachResult from '../../components/SearchResult/SeachResult';
import Contstants from './../../services/constants'
import { fetchCountPostByKeyword_API, fetchDataPage, updateKeySearch }  from './../../actions/search'
import AssetNews from '../../layout/items/asset-news/AssetNews';
import TheRoad from './../../layout/items/the-road/TheRoad'
import Review from './../../layout/items/review/Review'
import HomePersonal from '../../layout/items/home-personal/HomePersonal';
import {convertToURLObject, setQuery} from './../../utils/functions/queryURL'

const params = convertToURLObject(window.location.search)

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            currentPage: 1,
            totalPage:1,
            keyword: this.props.keyword
        }
    }
    static defaultProps = {
        keyword: ''
    }
    async UNSAFE_componentWillMount() {
        this.props.updateKeySearch(params.keyword)
        this.defaultLoad(params.page || 1)
    }
    

    componentDidMount() {
        this.fetchTotalPage(params)
    }
    
    static defaultProps = {
        searchResult: []
    }
    render() {
        const { searchResult } = this.props
        return (
            <SeachResult callbackPagination = {this.fetchDataPage} totalResult = {this.props.total_search} changePage = { this.changePage }>
                { this.fillResultItem(searchResult) }
            </SeachResult>
        )
    }

    fillResultItem = (searchResult) => {
        if(searchResult.length === 0) return;
        return searchResult.map((data, i) => {
            switch(data.type) {
                case Contstants.TYPE_NEW.POST:
                    return <AssetNews key={i} data={data} />
                case Contstants.TYPE_NEW.RES_ADDRESS:
                    return <TheRoad key={i} data={data} />
                case Contstants.TYPE_NEW.REVIEW:
                    return <Review key={i} data={data} />
                case Contstants.TYPE_NEW.PRODUCT:
                    return <HomePersonal key={i} data={data} />
                default:
                    break
            }
        })
    }

    fetchTotalPage = (params) => {
        this.props.getTotalPage(params)
        this.setState({
            totalPage: this.props.total_search / this.state.maxDisplayPost
        })
    }

    defaultLoad = (page) =>{
        this.props.fetchDataPage({...params, page})
    }

    changePage = (page) => {
        this.props.fetchDataPage({...params, page})
        // this.props.history.push({
        //     path: window.location.pathname,
        //     search: `keyword=${params.keyword || '' }&page=${page}`
        // });
    }
}

const mapStateToProps = (state) => ({
    total_search: state.search.total_search,
    searchResult: state.search.dataCurrentPage,
    keyword: state.search.keyword,
    page: state.search.page
})



const mapDispatchToProps = dispath => {
    return {
        getTotalPage: (params) => dispath(fetchCountPostByKeyword_API(params)),
        fetchDataPage: (payload) => {
            dispath(fetchDataPage(payload))
        },
        updateKeySearch: (keyword) => dispath(updateKeySearch(keyword))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (withRouter(SearchResultContainer))
