import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './../../services/reducers'
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middwares = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middwares));
export const store = createStore(
    allReducers,
    enhancer
)
