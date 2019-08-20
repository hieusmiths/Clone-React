import ActionsType from '../../actionsType'
import Constants  from './../../constants'
import { callingAPI, callAPISuccess, callAPIErr } from  './../../../utils/functions/callAPIStatus'

import axios from 'axios'


export const setSearch = (payload) => {
    return {
        type: ActionsType.SEARCH_SAVE,
        payload
    }
}



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
            dispatch(callAPIErr(ActionsType.CALL_API_ERROR, error))
        }
    }
}

const fecthDataByPage = (payload) => {
    return {
        type: ActionsType.GET_DATA_SEARCH_BY_KEYWORD_PAGE,
        payload
    }
}
export const fetchDataPageNumber = (payload) => {

    const params = {
        ...payload
    }

    console.log(payload)

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

export const getSuggestion = (payload) => {
    const params = {
        ...payload.query
    }
    console.log(params)
    return async dispatch => {
        try {
            const response = await axios.get(Constants.API_GET_SUGGESTION, { params })
            const payload = {
                keyword: params.keyword,
                suggestions: response.data
            }
            dispatch(getSuggestionSuccess(payload))
        } catch (error) {
            
        }
    }
}