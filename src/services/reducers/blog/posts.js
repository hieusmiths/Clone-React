import ActionsType from './../../actionsName'

const initialState = {
    data: [],
    suggestions: [],
    err: null,
    loading: false,
    keyword: '',
    content: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ActionsType.CALL_API_SUCCESS:
        return {...state,...payload, loading: false, err: false, keyword: payload.keyword}

    case ActionsType.CALL_API_ERROR:
        return {...state, loading: false, err: false}
    
    case ActionsType.T_GET_ALL_LIST_POST:
        return {...state, ...payload }

    case ActionsType.GET_DETAIL_POST:
        return {...state, content: payload.content}
        
    case ActionsType.GET_SUGGESTIONS:
        console.log(payload)
        return {...state, ...payload}
    default:
        return state
    }
}

