import reducer from './cake/cakeReducer'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))


export default store
