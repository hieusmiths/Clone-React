import ActionsType from '../services/actionsType'
import Constants  from '../services/constants'

import axios from 'axios'



const fecthCountPost_API = (payload) => {
    return {
        type: ActionsType.GET_COUNT_SEARCH_BY_KEYWORD_TYPE,
        payload
    }
}
export const fetchCountPostByKeyword_API = (payload) => {
    const params = {
       keyword: payload.keyword,
       type: payload.type || ''
    }

    return async dispatch => {
        try {
            const response =  await axios.get(Constants.API_GET_COUNT_SEARCH_BY_KEY_WORD, { params })
            const { total_search } = response.data[0]
            const payload = {
                total_search,
                keyword: params.keyword
            }
            dispatch(fecthCountPost_API(payload))
        } catch (error) {
        }
    }
}

const fecthDataByPage = (payload) => {
    return {
        type: ActionsType.GET_DATA_SEARCH_BY_KEYWORD_PAGE,
        payload
    }
}
export const fetchDataPage = (payload) => {
    const params = {
        page: payload.page,
        keyword: payload.keyword
    }
    
    return async dispatch => {
        try {
            const response = await axios.get(Constants.API_GET_LIST_SEARCH_BY_KEYWORD, { params })
            const payload = {
                ...params,
                dataCurrentPage: response.data
            }
            dispatch(fecthDataByPage(payload))
        } catch (error) {
            
        }
    }
}

const getDetailPostSuccess = (payload) => {
    return {
        type: ActionsType.GET_DETAIL_POST,
        payload
    }
}
export const getDetailPost = (postID) => {
    const params = {
        postID
    }
    return async dispatch => {
        try {
            const response = await axios.get(Constants.API_GET_DETAIL_POST, { params })
            const payload = {
                content: response.data[0]
            }
            dispatch(getDetailPostSuccess(payload))
        } catch (error) {
            
        }
    }
}

const getSuggestionSuccess = (payload) => {
    return {
        type: ActionsType.GET_SUGGESTIONS,
        payload
    }
}



export const getSuggestion = (keyword) => {
    
    
    return async dispatch => {
        dispatch(updateKeySearch(keyword))
        try {
            const response = await axios.get(Constants.API_GET_SUGGESTION, { params: {
                keyword
            } })
            const payload = {
                keyword,
                suggestions: response.data
            }
            dispatch(getSuggestionSuccess(payload))
        } catch (error) {
            
        }
    }
}

export const updateKeySearch = (keyword) => {
    console.log(keyword)
    return {
        type : ActionsType.UPDATE_KEY_SEARCH,
        keyword: keyword
    }
}