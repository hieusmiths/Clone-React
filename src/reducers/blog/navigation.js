import ActionsType from './../../services/actionsName'

const initialState = {
    total_search: 0,
    currentPage: 1,
    dataCurrentPage: [],
    keyword: '',
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    case ActionsType.CALLING_API:
        return {...state, loading: true, keyword: payload.keyword}
    
    case ActionsType.GET_COUNT_SEARCH_BY_KEYWORD_TYPE:
        return { ...state, total_search: payload.total_search, loading: false, keyword: payload.keyword }

    case ActionsType.GET_DATA_SEARCH_BY_KEYWORD_PAGE:
        return {...state, dataCurrentPage: [...payload.data]}
    default:
        return state
    }
}
