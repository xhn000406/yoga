// pages/aboutMe/aboutMe.js
import {areaList} from '../../miniprogram_npm/vant-weapp/area-data/index'
import {apiUpdateUserInfo} from '../../api/profile/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexValue : '0',
    isShowCity:false,
    areaList,
    cityValue:"",
    cityName:""
  },
  handleChangCity(e){
    console.log(this.data.areaData)
    this.setData({
      isShowCity:true
    })
  },
  handleCloseChangeCity(){
    this.setData({
      isShowCity:false
    })
  },
  handleConfirmCity(e){
    let cityName
     const cityNameArr = e.detail.values.map(item=> item.name)
     if(cityNameArr.length == 3){
        cityName = cityNameArr[0] + '-' + cityNameArr[1] + '-' + cityNameArr[2]
     }else{
       cityName = cityNameArr[0] + '-' + cityNameArr[1]
     }
    this.setData({
cityValue:e.detail.values[2].code,
cityName:cityName,
isShowCity:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  handleChangeSex(e){
    this.setData({
      sexValue:e.detail
    })
  },
  handleCloseCity(e){
  },
  onLoad: function (options) {

  },
 async handleUpdatePersonlInfo(){
    if(!this.data.cityName){
      wx.showToast({
        title: '请选择城市！',
        icon:'none'
      })
    }
     const payload = {cityName:this.data.cityName,cityValue:this.data.cityValue,sexValue:this.data.sexValue}
   await apiUpdateUserInfo(payload)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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