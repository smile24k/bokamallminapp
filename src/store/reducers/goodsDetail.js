import { handleActions } from 'redux-actions'
import { GOODS_DETAIL } from '../types/indexType'

export default handleActions({
  [GOODS_DETAIL](state, action) {
    return {
      ...state,
      data: action.payload.result,
    }
  }
}, {
    data: {}
  })