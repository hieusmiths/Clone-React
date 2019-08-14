import ActionsType from './../../actionsName'
import Constants  from './../../constants'
import { callingAPI, callAPISuccess, callAPIErr } from  './../../../utils/functions/callAPIStatus'

import axios from 'axios'

const fetchAllPost = data => ({
    type: ActionsType.T_GET_ALL_LIST_POST,
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
        dispatch(callingAPI(ActionsType.T_CALLING_API))
        try {
            const response = await axios.get(Constants.API_GET_LIST_SEARCH_BY_KEYWORD, { params })
            dispatch(callAPISuccess(ActionsType.T_CALL_API_SUCCESS, response.data))
        } catch (err) {
            dispatch(callAPIErr(ActionsType.T_CALL_API_ERROR, err))
        }
    }
}

