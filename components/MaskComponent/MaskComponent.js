// components/MaskComponent/MaskComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes:{
    attached(){
      var _this = this;
       setTimeout(function(){
        _this.setData({
          activeClass: "mask-transition mask-show"
        })
       },1000)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    activeClass:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeMaskView(){
      this.setData({
        activeClass: "mask-transition"
      })
    },
    transitionend(){
      // transition结束的时候会触发该函数
      if(this.data.activeClass=="mask-transition"){
          this.triggerEvent("hideMaskView")
      }
    }
  }
})
