/**
 * Created by wangxueli on 2016/9/2.
 */
$(function(){
    //筋斗云特效开始
    var cloud = document.getElementById("cloud");//筋斗云
    var ul = document.getElementById("navBar");
    var lis = ul.children;

    var lastPosition = 0;

    //鼠标经过li 让筋斗云跑过来
    //给每一个li绑定鼠标经过事件 鼠标经过当前li 让筋斗云跑过来
    for (var i = 0; i < lis.length; i++) {
        //给每一个li绑定鼠标经过事件
        lis[i].onmouseover = function () {
            //让筋斗云 渐渐地 跑过来
            //目标 就是鼠标经过的li的offsetLeft
            var target = this.offsetLeft;
            animate(cloud, target);
        }
        //鼠标离开当前li cloud要回去
        lis[i].onmouseout = function () {
            //让筋斗云 渐渐地 跑回去
            animate(cloud, lastPosition);
        }
        //点击li要记录当前li的位置
        lis[i].onclick = function () {
            lastPosition = this.offsetLeft;
        }
    }
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            //var target = 0;
            var leader = obj.offsetLeft;
            var step = (target - leader) / 5;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader == target) {
                clearInterval(obj.timer);
            }
        }, 15)
    }

    //定义一个变量接收位置
    var distestence;
    //当鼠标进入li标签时候
    $(".showpic>ul>li").mouseenter(function(){
        //记录当前h3的位置
        distestence= $(this).children("h3").position();
        // h3进入指定位置
        $(this).children("h3").stop().animate({"top":"80px","left":"100px"},1000);
        // p透明度渐变为1
        $(this).children("p").stop().fadeIn(1000);
        // 当前li透明度为1
        // 其他li透明度0.7
        // $(this).css("opacity",1).siblings().css("opacity",0.7);
        //当前li向右上角移动10px;
        $(this).stop().animate({"top":"-10px","left":"5px"})
        //$(this).animate({"style>background":"-10px"},1000);
    })
    //鼠标离开的时候恢复到原来的位置
    $(".showpic>ul>li").mouseleave(function(){
        $(this).children("h3").stop().animate({"top":distestence.top+"px","left":
        distestence.left+"px"},1000);
        $(this).children("p").stop().fadeOut(1000);
        // $(".showpic>ul>li").css("opacity",0.9);
        $(this).stop().animate({"top":"0px","left":0})

    })
})