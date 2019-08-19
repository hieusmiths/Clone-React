import ActionsType from './../../actionsName'
import Constants  from './../../constants'
import { callingAPI, callAPISuccess, callAPIErr } from  './../../../utils/functions/callAPIStatus'

import axios from 'axios'


export const setSearch = (payload) => {
    console.log(payload)
    return {
        type: ActionsType.SEARCH_SAVE,
        payload
    }
}

const fetchAllPost = data => ({
    type: ActionsType.CALL_API_ERROR,
    data
})
export const fetchAllPost_API = () => {
    return dispatch => {
        return axios.get(Constants.API_GET_ALL_LIST_POST)
            .then(response => {
                dispatch(fetchAllPost(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
} 

export const fetchSearchByKeyWord_API = (object) => {
    
    const params = {
        keyword: object.query.keyword
    }
    return async dispatch => {
        dispatch(callingAPI(ActionsType.CALLING_API, params))
        try {
            const response = await axios.get(Constants.API_GET_LIST_SEARCH_BY_KEYWORD, { params })
            const payload = {
                data: response.data,
                keyword: params.keyword
            }
            dispatch(callAPISuccess(ActionsType.CALL_API_SUCCESS, payload))
        } catch (err) {
            dispatch(callAPIErr(ActionsType.CALL_API_ERROR, err))
        }
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
        const URL_API = `${Constants.API_GET_COUNT_SEARCH_BY_KEY_WORD}`
        const payload = {
            keyword: params.keyword,
        }
        dispatch(callingAPI(ActionsType.CALLING_API, payload))
        try {
            const response =  await axios.get(URL_API, { params })
            const { total_search } = response.data[0]
            const payload = {
                total_search,
                keyword: params.keyword
            }
            dispatch(fecthCountPost_API(payload))
            dispatch(setSearch(payload))
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
            dispatch(setSearch(params))
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
            dispatch(setSearch(payload))
            dispatch(getSuggestionSuccess(payload))
        } catch (error) {
            
        }
    }
}