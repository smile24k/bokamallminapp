import { handleActions } from 'redux-actions'
import { GET_NEW_MOIVE, GET_MOIVES, GET_TOP250 ,GET__MOIVE_DETAIL} from '../types/indexType'

export default handleActions({
  [GET_MOIVES](state, action) {
    return {
      ...state,
      moives:action.payload
    }
  },
  [GET_TOP250](state, action) {
    return {
      ...state,
      top250:action.payload
    }
  },
  [GET_NEW_MOIVE](state, action) {
    return {
      ...state,
      newMoives:action.payload
    }
  },
  [GET__MOIVE_DETAIL](state, action) {
    return {
      ...state,
      moiveDetail:action.payload
    }
  }
}, {
  moives: {},
  top250:{},
  newMoives:{},
  moiveDetail:{}
  })
