// components/LogoComponent/LogoComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeClass:'',
    showLogo:true
  },
  // 组件生命周期钩子函数
  lifetimes: {
    created(){
      console.log("组件被创建了");
    },
    attached:function(){
      console.log("触发钩子函数");
      const _this = this;
      setTimeout(function(){
        _this.setData({
          activeClass: "logo-enter-animation"
        })
      },500)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    animationstart(){
      console.log("动画开始");
    },
    animationend(){
      console.log("动画结束");
      const _this = this;
      if(this.data.activeClass=="logo-leave-animation"){
        _this.setData({
            showLogo:false
         })
      }
      setTimeout(function(){
        _this.setData({
          activeClass:"logo-leave-animation"
        })
      },2000)
    }
  }
})
