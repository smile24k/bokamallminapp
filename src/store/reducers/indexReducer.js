import { handleActions } from 'redux-actions'
import { INDEX_GETGOODS_BEGTIN, INDEX_GETGOODS } from '../types/indexType'

export default handleActions({
  [INDEX_GETGOODS](state, action) {
    return {
      ...state,
      hasMore: action.payload.result.length >= 10,
      loading: false,
      data: state.data.concat(action.payload.result),
      page: state.page + 1
    }
  }
}, {
    hasMore: true,
    loading: true,
    data: [],
    page: 1
  })