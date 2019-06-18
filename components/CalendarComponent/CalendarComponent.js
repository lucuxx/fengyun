// components/CalendarComponent/CalendarComponent.js
import {dailyBGURL,baseURL} from '../../apis/index'
import {formatTime,getWeek} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDesc:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeStyle:"",
    baseURL: baseURL,
    imgUrls: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    activeDescView: "",//文字视图的样式
    activeTopBar:"",
  },
  lifetimes:{
    attached(){
      const _this = this;
      var rs = getWeek(0);
      wx.request({
        url:dailyBGURL,
        data:{
          from:rs[0],
          to:rs[rs.length-1]
        },
        success:function(resp){
          _this.setData({
            imgUrls: resp.data.data
          })
        }
      })
      setTimeout(function(){
        _this.setData({
          activeStyle: "opacity:1",
          activeDescView:"descriptionView-transition descriptionView-show"
        })
      },3000)
    }
  },
  observers:{
    activeStyle(newValue,oldValue){
      var _this = this;
      if(newValue=="opacity:1"){
          setTimeout(function(){
            //  通知MASK视图可以渲染了
            _this.triggerEvent("showMaskView");
            _this.setData({
              activeDescView:"descriptionView-transition"
            })
          },3000)
      }
    },
    showDesc(newValue){
        console.log("数据发生变化");
        if(newValue){
          this.setData({
            activeDescView:"descriptionView-transition descriptionView-show",
            activeTopBar: "topBar-transition topBar-show "
          })
        }else{
          this.setData({
            activeDescView:"descriptionView-transition",
            activeTopBar:"topBar-transition"
          })
        }
       
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    transitionend(){
    
    },
    // 点击x的时候回maskView中
    closeCalendar(){
      this.triggerEvent("showMaskView");
      this.setData({
        showDesc:false
      })
    }
  }
})
