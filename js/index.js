/**
 * Created by wangxueli on 2016/9/2.
 */
$(function(){

    //图片滚动特效
    var bigBg=document.getElementById("bigBg")
    var bg_pic = {
        position: 0
    }

    //2.移动背景
    setInterval(function () {
        //计算天空的背景
        bg_pic.position = bg_pic.position - 3;
        //设置天空的背景的位置
        bigBg.style.backgroundPositionX = bg_pic.position + "px";
    }, 25)//我预先调好









})