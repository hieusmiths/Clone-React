import React, { Component } from 'react'
import { connect } from 'react-redux'
import SeachResult from '../../components/SearchResult/SeachResult';
import Contstants from './../../services/constants'
import { fetchCountPostByKeyword_API, fetchDataPageNumber, updateKeySearch }  from './../../services/actions/post'
import AssetNews from '../../layout/items/asset-news/AssetNews';
import TheRoad from './../../layout/items/the-road/TheRoad'
import Review from './../../layout/items/review/Review'
import HomePersonal from '../../layout/items/home-personal/HomePersonal';
import {convertToURLObject} from './../../utils/functions/queryURL'

const params = convertToURLObject(window.location.search)

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            currentPage: 1,
            totalPage:1,
            query: {},
            maxDisplayPost:5,
            keyword: this.props.keyword
        }
    }
    static defaultProps = {
        keyword: ''
    }
    async UNSAFE_componentWillMount() {
        this.props.updateKeySearch(params)
        this.changePage(params.page || 1)
    }
    

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { total_search } = nextProps;
        
        const totalPage = Math.ceil(total_search / this.state.maxDisplayPost)
        this.setState({
            totalPage,
            searchResult: nextProps.searchResult,
            keyword: nextProps.keyword
        })
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

    changePage = (page) =>{
        this.props.fetchDataPage({...params, page})
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
            dispath(fetchDataPageNumber(payload))
        },
        updateKeySearch: (keySearch) => dispath(updateKeySearch(keySearch))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)
