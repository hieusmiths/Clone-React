import ActionsType from './../../actionsName'
import Constants  from './../../constants'
import { callingAPI, callAPISuccess, callAPIErr } from  './../../../utils/functions/callAPIStatus'

import axios from 'axios'
import { async } from 'q';

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
        dispatch(callingAPI(ActionsType.CALLING_API))
        try {
            const response = await axios.get(Constants.API_GET_LIST_SEARCH_BY_KEYWORD, { params })
            dispatch(callAPISuccess(ActionsType.CALL_API_SUCCESS, response.data))
        } catch (err) {
            dispatch(callAPIErr(ActionsType.CALL_API_ERROR, err))
        }
    }
}


const fecthCountPost_API = (totalPage) => {
    return {
        type: ActionsType.GET_COUNT_SEARCH_BY_KEYWORD_TYPE,
        totalPage
    }
}
export const fetchCountPostByKeyword_API = (payload) => {
    const params = {
       keyword: payload.keyword,
       type: payload.type
    }

    return async dispatch => {
        const URL_API = `${Constants.API_GET_COUNT_SEARCH_BY_KEY_WORD}`
        try {
            const response = axios.get(URL_API, { params })
            console.log(response)
            dispatch(fecthCountPost_API(response))
        } catch (error) {
            dispatch(callAPIErr(ActionsType.CALL_API_ERROR, error))
        }
    }
}

