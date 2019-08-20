import React, { Component } from 'react'
import {connect} from 'react-redux'
import AssetNews from '../../layout/items/asset-news/AssetNews';


export default class NewResult extends Component {
    render() {
        // const 
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    total_search: state.navigationPost.total_search,
})

const mapDispatchToProps = dispath => {
return {
getTotalPage: (params) => dispath(fetchCountPostByKeyword_API(params)),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer)