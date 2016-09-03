
$(function(){
// 轮播图开始
var box = document.getElementById('two_bg');
var inner = box.children[0];
    // console.log(inner);
    var width = inner.offsetWidth;
    // console.log(width);
    var ulLis = document.getElementById('uls');
    var lis = ulLis.children;
    // console.log(lis);
    var span = document.getElementById('square');
    var spans  = span.children;
    var arr = document.getElementById('dir_img');
    var right = document.getElementById('right');
    var left = document.getElementById('left');
    var timer = null;
    // 克隆第一张图片
    var cloneImg = lis[0].cloneNode(true);
    ulLis.appendChild(cloneImg);
    // 点击小图标显示对应的图片
    for(var i=0; i<spans.length; i++){
          spans[i].index = i;//记录下所有的index；
          spans[i].onmouseover = function(){
             for(var j=0; j<spans.length; j++){
                spans[j].className = '';
            }
            this.className = 'current';
            var target = -this.index * width;
         // console.log(this.index);
         animate(ulLis,target);
         pic = square = this.index;
     }
 }
    //鼠标放上去显示箭头并停止动画
    box.onmouseover = function(){
        arr.style.display = 'block';
        clearInterval(timer);
    }
    // 鼠标离开，箭头隐藏，让动画继续
    box.onmouseout = function(){
        arr.style.display = 'none';
        timer = setInterval(playNext,2000);
    }
    //  点击左右箭头，让图片滚动
    var pic = 0;
    var square = 0;
    right.onclick = function(){
        playNext();
    }
    left.onclick = function(){
        if(pic === 0){
            ulLis.style.left = -(lis.length - 1)*width + 'px';
            pic = lis.length-1;
        }
        pic--;
        var target = -pic * width;
        animate(ulLis,target);
        if(square>0){
            square--;
        }else{
            // square的最大值要与下标保持一致
            square = spans.length - 1;
        }
        for(var i=0; i<spans.length; i++){
            spans[i].className = '';
        }
        spans[square].className = 'current';
    }
// 自动滚动
timer = setInterval(playNext,2000);

function playNext(){
    if(pic === lis.length - 1){
        ulLis.style.left = 0 + 'px';
        pic = 0;
    }
    pic++;
    var target = -pic*width;
    animate(ulLis,target);
        // 图片滚动，让小图标一起滚动
        if(square < spans.length - 1){
            square++;
        }else{
            square = 0;
        }
        for(var i=0; i<spans.length; i++){
            spans[i].className = '';
        }
        spans[square].className = 'current';
    }
    
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 20;
            step = leader < target ? step : -step;
            if (Math.abs(leader - target) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }

    $(function () {
        $(".products dl").mouseenter(function () {
            $(this).css("opacity", 0.9).siblings().css("opacity", 0.5);
            //  $(this).eq(1).fadeIn(1000);
            $("#details").fadeIn(1000);
        });
        $(".products dl").stop().mouseleave(function () {
            $(".products dl").css("opacity", 1);
            $("#details").fadeOut(1000);
        });
    });

    var speed = 10//ËÙ¶ÈÊýÖµÔ½´óËÙ¶ÈÔ½Âý
    var colee_right2 = document.getElementById("colee_right2");
    var colee_right1 = document.getElementById("colee_right1");
    var colee_right = document.getElementById("colee_right");
    colee_right2.innerHTML = colee_right1.innerHTML
    function Marquee4() {
        if (colee_right.scrollLeft <= 0)
            colee_right.scrollLeft += colee_right2.offsetWidth
        else {
            colee_right.scrollLeft++
        }
    }
    var MyMar4 = setInterval(Marquee4, speed)
    colee_right.onmouseover = function () {
        clearInterval(MyMar4)
    }
    colee_right.onmouseout = function () {
        MyMar4 = setInterval(Marquee4, speed)
    }

//    $(".products dl").mouseenter(function(){
//        $(this).animate({"width":"270px","height":"185px"})
//    })
//
//    $(".products dl").mouseleave(function(){
//        $(this).animate({"width":"265px","height":"177px"})
//    })
})