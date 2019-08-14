import ActionsType from '../services/actionsName'

const initialState = {
    payload: [],
    err: null,
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ActionsType.T_CALLING_API:
        return {...state, loading: true }
    
    case ActionsType.T_CALL_API_SUCCESS:
        return {...state, payload: [...payload], loading: false, err: false}

    case ActionsType.T_CALL_API_ERROR:
        return {...state, loading: false, err: false}
    
    case ActionsType.T_GET_ALL_LIST_POST:
        return {...state, ...payload }

    default:
        return state
    }
}

