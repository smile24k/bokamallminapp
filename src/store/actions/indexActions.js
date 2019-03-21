import { INDEX_GETGOODS } from '../types/indexType'
import { createAction } from 'redux-actions'
import constant from "../../common/constant";
import wepy from 'wepy'
export const getGoods = createAction(INDEX_GETGOODS, () => {
  
  return wepy.request({
    url: constant.apiUrl + '/order/goods?page=1'
  }).then(d => d);
  
})