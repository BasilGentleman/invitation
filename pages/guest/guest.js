// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker:{
      arr:['0','1','2','3','4','5','6'],
      index:1
    }
  },
  pickerChange:function(e){
    this.setData({
      'picker.index' : e.detail.value
    })
  },
  //验证姓名
  nameChange:function(e){
    this.checkName(e.detail.value)
  },
  //验证手机号
  phoneChange:function(e){
    this.checkPhone(e.detail.value)
  },
  //验证姓名方法
  checkName:function(data){
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data,reg,'姓名输入错误!')
  },

  //验证手机号
  checkPhone:function(data){
    var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    return this.check(data,reg,'手机号码输入有误!')
  },

  //check方法
  check:function(data,reg,errMsg){
    if(!reg.test(data)){
      wx.showToast({
        title: errMsg,
        icon:'none',
        duration:1500
      })
      return false
    }
    return true
  },
  formSubmit:function(e){
    console.log(e.detail.formId)
    var name = e.detail.value.name
    var phone = e.detail.value.phone
    var num = e.detail.value.num
    var wish = e.detail.value.wish
    if(this.checkName(name) && this.checkPhone(phone)){
      //将e.detail.value提交给服务器
    //   wx.login({
    //    success:res =>{
    //      server.post({
    //        formId:e.detail.formId,
    //        code:res.code
    //      },() =>{
    //       wx.showToast({
    //         title: '提交成功',
    //         icon:'success',
    //         duration:1500
    //       })
    //       server.sendTemplateMessage(res =>{
    //         console.log('模板消息发送结果：',res.data)
    //       })
    //      })
    //    },
    //   }) 
      wx.request({
        url: 'http://127.0.0.1:3000/msg',
        method:'POST',
        data:{
          name:name,
          phone:phone,
          num:num,
          wish:wish
        },
        success:res =>{
          console.log(res)
          wx.showToast({
             title: '提交成功',
             icon:'success',
              duration:1500
          })
        }
      })

     }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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