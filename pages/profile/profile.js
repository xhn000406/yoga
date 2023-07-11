// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
      nickName:"游客"
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  routerPush(){
     wx.navigateTo({
       url: '../aboutMe/aboutMe',
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  login(){
    const _this = this
 wx.login({
   success(res){
     if(res.code && res.code.length > 0){
       wx.request({
         method:"POST",
         url: 'http://localhost:3030/wxLogin',
         data:{
           code:res.code
         },success(res){
          getApp().globalData.openid = res.data.data.openid
          getApp().globalData.token = res.data.data.token
          wx.getUserInfo({
            success(res){
           getApp().globalData.userInfo = res.userInfo
           console.log(getApp().globalData.userInfo)
           _this.setData({
            userInfo:getApp().globalData.userInfo
          })
            }
          })
         }
       })
     }
   }
 })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})