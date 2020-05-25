//index.js
Page({
 data:{
  isPlayingMusic: false  
 },
 bgm:null,
 music_url:'http://localhost:3000/1.mp3',
 music_coverImgUrl:'http://localhost:3000/cover.jpg',
 onReady:function(){
  this.bgm = wx.getBackgroundAudioManager()
  this.bgm.title = '今天你要嫁给我'
  this.bgm.pname = 'wedding'
  this.bgm.singer = '陶喆/蔡依林'
  this.bgm.coverImgUrl = this.music_coverImgUrl
  this.bgm.onCanplay(() =>{
    this.bgm.pause()
  })
  this.bgm.src = this.music_url
 },
 play:function(){
  if(this.data.isPlayingMusic){
    this.bgm.pause()
   }else{
     this.bgm.play()
   }
   this.setData({
    isPlayingMusic: !this.data.isPlayingMusic
   })
 },
 //打电话
 callGroom:function(){
  wx.makePhoneCall({
    phoneNumber: '13700000000',
  })
 },
 callBride:function(){
  wx.makePhoneCall({
    phoneNumber: '15600000000',
  })
 }
})
