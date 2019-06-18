//index.js
//获取应用实例
const app = getApp()
import {dailyBGURL,baseURL} from '../../apis/index'
Page({
  data:{
    bgInfo:{},
    baseURL:baseURL,
    show:false,
    isShowMask:false,
    showDesc:false
  },
  onLoad:function(){
  },
  showMaskView(){
    this.setData({
      isShowMask: true
    })
  },
  hideMaskView(){
    this.setData({
      isShowMask: false,
      showDesc: true
    })
  }
})
