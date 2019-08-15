import React, { Component } from 'react'
import { connect } from 'react-redux'
import SeachResult from '../../components/SearchResult/SeachResult';
import Contstants from './../../services/constants'
import { fetchCountPostByKeyword_API, fetchDataPageNumber }  from './../../services/actions/post'
import AssetNews from '../../layout/items/asset-news/AssetNews';
import TheRoad from './../../layout/items/the-road/TheRoad'
import Review from './../../layout/items/review/Review'
import HomePersonal from '../../layout/items/home-personal/HomePersonal';

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            currentPage: 1,
            totalPage:1,
            query: {},
            maxDisplayPost:5,
            keyword: ''
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props)
        const { query, pageStartData} = this.props.location.state.params;
            this.setState({
                query,
                searchResult: pageStartData,
            })
            const params = {
                page: this.state.currentPage,
                keyword: this.props.location.state.params.query.keyword
            }
            this.fetchTotalPage(query)
            this.fetchDataPage(params)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { total_search } = nextProps;
        const totalPage = Math.ceil(total_search / this.state.maxDisplayPost)
        this.setState({
            totalPage,
            searchResult: nextProps.searchResult
        })
    }
    static defaultProps = {
        searchResult: []
    }
    render() {
        const { searchResult } = this.props
        return (
            <SeachResult fetchDataPage = { this.fetchDataPage }>
                { this.fillResultItem(searchResult) }
            </SeachResult>
        )
    }

    fillResultItem = (searchResult) => {
        return searchResult.map((data, i) => {
            switch(data.type) {
                case Contstants.TYPE_New.POST:
                    return <AssetNews key={i} data={data} />
                case Contstants.TYPE_New.RES_ADDRESS:
                    return <TheRoad key={i} data={data} />
                case Contstants.TYPE_New.REVIEW:
                    return <Review key={i} data={data} />
                case Contstants.TYPE_New.HOME_PERSONAL:
                    return <HomePersonal key={i} data={data} />
                default:
                    break
            }
        })
    }

    fetchTotalPage = (payload) => {
        this.props.getTotalPage(payload)
        this.setState({
            totalPage: this.props.total_search / this.state.maxDisplayPost
        })
        console.log(this.props.total_search)
    }

    fetchDataPage = (query) => {
        const params = {
            page:   this.state.currentPage,
            keyword: this.state.keyword,
            type: this.state.type || ''
        }
        this.props.fetchDataPage(params)
    }

    setUrl(params, pageNumber) {

    }
}

const mapStateToProps = (state) => ({
    total_search: state.navigationPost.total_search,
    searchResult: state.navigationPost.dataCurrentPage
})

const mapDispatchToProps = dispath => {
    return {
        getTotalPage: (params) => dispath(fetchCountPostByKeyword_API(params)),
        fetchDataPage: (payload) => {
            dispath(fetchDataPageNumber(payload))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)
