import ActionsType from './../../services/actionsName'

const initialState = {
    totalPage: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionsType.GET_COUNT_SEARCH_BY_KEYWORD_TYPE:
        return { ...state, ...payload }

    default:
        return state
    }
}
