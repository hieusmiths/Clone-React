import ActionsType from './../actionsType'
const initialState = {
    keyword: '',
    page: 1,
    dataCurrentPage: [],
    total_search: 0,
    suggestions: [],
    loading: false,
    content: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionsType.GET_COUNT_SEARCH_BY_KEYWORD_TYPE:
        return {...state, total_search: payload.total_search}

    case ActionsType.GET_DATA_SEARCH_BY_KEYWORD_PAGE:
        return {...state, ...payload}

    case  ActionsType.GET_SUGGESTIONS:
        return {...state, suggestions: payload.suggestions, keyword: payload.keyword}

    case ActionsType.GET_DETAIL_POST:
        return {...state, content: payload.content }

    case ActionsType.UPDATE_KEY_SEARCH:
        console.log('run ', payload)
        return {...state, keyword: payload}
    default:
        return state
    }
}
