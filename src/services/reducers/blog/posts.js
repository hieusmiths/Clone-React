import ActionsType from './../../actionsName'

const initialState = {
    data: [],
    err: null,
    loading: false,
    keyword: '',
    content: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    // case ActionsType.CALLING_API:
    //     return {...state, loading: true }
    
    case ActionsType.CALL_API_SUCCESS:
        return {...state,...payload, loading: false, err: false, keyword: payload.keyword}

    case ActionsType.CALL_API_ERROR:
        return {...state, loading: false, err: false}
    
    case ActionsType.T_GET_ALL_LIST_POST:
        return {...state, ...payload }

    case ActionsType.GET_CONTENT_POST:
        return {...state, content: payload.content}
        
    default:
        return state
    }
}

