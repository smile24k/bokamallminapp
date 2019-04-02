import { GET_MOIVES, GET_TOP250,GET_NEW_MOIVE,GET__MOIVE_DETAIL} from '../types/indexType'
import { createAction } from 'redux-actions'
import constant from "../../common/constant";
import wepy from 'wepy'
wx.cloud.init({
  traceUser: true
});

export const getMoives = createAction(GET_MOIVES, (page, product) => {
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: 'moive',
      success: res => {
        resolve(res.result);
      },
      fail: err => {
        reject(err);
      }
    });
  })

})

export const getTop250 = createAction(GET_TOP250, (page, product) => {
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: 'top250',
      success: res => {
        resolve(res.result);
      },
      fail: err => {
        reject(err);
      }
    });
  })

})
export const getNewMoive = createAction(GET_NEW_MOIVE, (page, product) => {
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: 'koubei',
      success: res => {
        resolve(res.result);
      },
      fail: err => {
        reject(err);
      }
    });
  })

})

export const getMoiveById = createAction(GET__MOIVE_DETAIL, id => {
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: 'moiveDetail',
      data:{
        id
      },
      success: res => {
        console.log('[云函数] [douban] data: ', res.result);
        resolve(res.result);
        // return res.result;
      },
      fail: err => {
        console.error('[云函数] [douban] 调用失败', err);
        reject(err);
      }
    });
  })

})