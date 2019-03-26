import { combineReducers } from 'redux'
import counter from './counter'
import indexReducer from './indexReducer'
import goodsDetail from './goodsDetail'

export default combineReducers({
  counter,
  indexReducer,
  goodsDetail
})