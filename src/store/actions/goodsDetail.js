import { GOODS_DETAIL } from '../types/indexType'
import { createAction } from 'redux-actions'
import constant from "../../common/constant";
import wepy from 'wepy'
export const getGoodsById = createAction(GOODS_DETAIL, (goodsId, product) => {
  return  wepy.request({
    url: constant.apiUrl + '/order/goods/' + goodsId + '/get'
  }).then(d => d);

})