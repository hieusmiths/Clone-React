import ActionsType from './../actionsName'
const initialState = {
    keyword: '',
    page: 1,
    total_search: 0,
    suggestions: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionsType.SEARCH_SAVE:
        console.log(payload)
        return { ...state, ...payload }

    default:
        return state
    }
}
