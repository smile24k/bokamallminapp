import { handleActions } from 'redux-actions'
import { INDEX_GETGOODS_BEGTIN, INDEX_GETGOODS } from '../types/indexType'

export default handleActions({
  [INDEX_GETGOODS](state,action) {
    console.log(state);
    console.error(action)
    
    return {
      ...state,
      hasMore: action.payload.result.length >= 10,
      loading: false,
      data: action.payload.result
    }
  }
}, {
    hasMore: true,
    loading: true,
    data: []
  })