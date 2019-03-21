import { combineReducers } from 'redux'
import counter from './counter'
import indexReducer from './indexReducer'

export default combineReducers({
  counter,
  indexReducer
})