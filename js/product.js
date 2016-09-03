/**
 * Created by Administrator on 2016/5/14.
 */
$(function() {
//**********头部特效**********
//导航效果
//    var nav_index = 1;
//    $(".nav li").mouseenter(function () {
//        $(this).addClass("current").siblings().removeClass();
//        $(this).click(function () {
//            nav_index = $(this).index();
//        });
//    });
//
//    $(".nav").mouseleave(function () {
//        $(".nav li").eq(nav_index).addClass("current").siblings().removeClass();
//    });

//全选显示收藏按钮
    $('#allClose').click(function() {
        if($(this).text() == '全︾'){
            $(this).text('全︽');
            $(this).parents('section').siblings().show();
            $('section .partClose').text('︽');
        }else {
            $(this).text('全︾');
            $('#consul').nextAll('section').hide();
            $('section .partClose').text('︾');
        }
    });

//显示收藏按钮
    $('section .partClose').click(function() {
        $(this).parents('section').next().toggle();
        if($(this).text()=='︾'){
            $(this).text('︽');
        }else {
            $(this).text('︾');
        }
    });
//**********运营体系**********  (ccs3旋转)

//**********产品体系**********  (旋转木马)
    //配置单
    var config = [
        {
            "top": 350,
            "left": 536,
        },//0
        {
            "top": 230,
            "left": 724,
        },//1
        {
            "top": 50,
            "left": 644,
        },//2
        {
            "top": 50,
            "left": 424,
        },//3
        {
            "top": 230,
            "left": 346,
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


    var flag = true,
        sys_timer = null,
        sys_index = 0;
    //当鼠标经过system盒子时，渐渐显示小三角箭头，开启轮播图
    $(document).mouseenter(function () {
        if(flag) {
            flag = false;
            $("#p_arrow").animate({"opacity": 1});//把透明度的箭头设置为1
            //给左边3个li设置配置单中的属性样式，移动li 到配置单指定的位置
            $("#system li").eq(0).stop(true,false).animate(config[0], 500, function (){
                $("#system li").eq(1).animate(config[1], 500, function (){
                    $("#system li").eq(2).animate(config[2], 500, function (){
                        flag = true;
                        //开启轮播图
                        sysAutoPlay ();
                    });
                });
            });
            //给右边3个li设置配置单中的属性样式，移动li 到配置单指定的位置
            $("#system li").eq(3).stop(true,false).animate(config[3], 500, function (){
                $("#system li").eq(4).animate(config[4], 500, function (){
                    $("#system li").eq(5).animate(config[5], 500, function (){
                        flag = true;
                    });
                });
            });
        }

    });
    //当鼠标移入li元素停止轮播图，移出开启轮播图
    $('#system li').mouseenter(function(){
       clearInterval(sys_timer) ;
    }).mouseleave(function(){
        sysAutoPlay ();
    }).click(function() {     //点击显示对应模块
        sys_index = $(this).index();
        $('#system').nextAll('section').eq(sys_index).addClass('current')
            .siblings().removeClass('current');
    });
    //系统部分轮播图函数;
    function sysAutoPlay (){
        if(sys_timer) clearInterval(sys_timer);
        sys_timer = setInterval(function(){
            $("#p_arrRight").click();
        },1000);
    }

    //当鼠标离开system盒子时，渐渐隐藏小三角箭头
    $("#system").mouseleave(function () {
        $("#p_arrow").stop(true,false).animate({"opacity": 0});//把透明度的箭头设置为0
    });

    //点击右侧箭头，移动图片
    $("#p_arrRight").click(function () {
        //点击右侧箭头，删除配置单第一个对象，追加到最后
        if (flag) {
            flag = false;
            config.push(config.shift());
            $("#system li").each(function (index, element) {
                $(element).stop(true,false).animate(config[index], 500, function () {
                    flag = true;
                });
            });
        }
    });

    //点击左侧箭头，移动图片
    $("#p_arrLeft").click(function () {
        //点击左侧箭头，删除最后一个，追加到第一个
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            $("#system li").each(function (index, element) {
                $(element).animate(config[index], 500, function () {
                    flag = true;
                });
            });
        }
    });

//**********招生部分**********
//手风琴效果
    var divHeight = $('#enroll .parten').height();
    $('#enroll .parten').mouseenter(function(){
        var imgHeight= $(this).children(0).height();
        $(this).stop(true,false).animate({height:imgHeight},500)
        .siblings().stop(true,false).animate({height:divHeight},500);
    });
    $('.enr_wrap').mouseleave(function() {
        var imgHeight= $(this).children(0).height();
        $(this).children(0).stop(true,false).animate({height:imgHeight},500)
            .siblings().stop(true,false).animate({height:divHeight},500);
    })

// **********运营部分**********
// 轮播图效果
    // 鼠标经过时，小三角显示，鼠标离开时，小三角隐藏
    $(".oper_pic").mouseenter(function () {
        $("#arrow").stop(true,false).show(500);
    }).mouseleave(function (){
        $("#arrow").stop(true,false).hide(500);
    });

    var moveLeft = 0,
        op_index = 0,
        jul = $('#oper ul'),
        jlis = jul.find('li'),
        jfstli = jlis.eq(0),
        start = true,
        op_timer = null;
        //动态生成最后一个li元素
    jul.append(jfstli.clone());
    //点击右边小三角，ul向左移动一个li宽度,对应的div显示内容
    $("#arrRight").click(function () {
        //ul向左移动一个li宽度
        if (start) {
            start = false;
            op_index++;
            moveLeft = -jfstli[0].offsetWidth * op_index;
            jul.stop(true, false).animate({'left': moveLeft}, 500, function () {
                if (op_index == jlis.length) {
                    op_index = 0;
                    jul[0].style.left = '0px';
                }
                //对应的div显示内容
                $('.oper_wrap .parten').eq(op_index).stop(true, false).show(300)
                    .siblings().hide(300);
                start = true;
            });
        }
    });
    //点击左边小三角，ul向右移动一个li宽度,对应的div显示内容
    $("#arrLeft").click(function () {
        //ul向右移动一个li宽度
        if(start) {
            start = false;
            if(op_index == 0) {
                op_index =jlis.length;
                jul[0].style.left = -jfstli[0].offsetWidth*op_index+'px';
            }
            op_index--;
            moveLeft = -jfstli[0].offsetWidth*op_index;
            jul.stop(true,false).animate({'left':moveLeft},500,function(){
                //对应的div显示内容
                $('.oper_wrap .parten').eq(op_index).stop(true,false).show(300)
                    .siblings().hide(300);
                start = true;
            });
        }
    });
    //鼠标划入运营模块自动轮播开始,鼠标划出运营模块或鼠标移入图片自动轮播结束
    $('#oper').mouseenter(function(){
        operAutoplay();
    }).mouseleave(function(){
        clearInterval(op_timer);
    });
    $('#oper .oper_pic').mouseenter(function(){
        clearInterval(op_timer);
    }).mouseleave(function(){
        operAutoplay()
    });
    //运营模块轮播函数
    function operAutoplay(){
        if(op_timer) clearInterval(op_timer);
        op_timer = setInterval(function () {
            $("#arrRight").click();
        },2000 )
    }
//**********教学部分**********
//选项卡
    var tech_timer = null,
        tech_index = 0,
        tech_lis = $('.teach_tab li'),
        tech_part = $('#teach .parten');

    //鼠标划入教学部分 开启轮播，显示对应div； 滑出教学部分 停止轮播
    $('#teach').mouseenter(function (){
        teachAutoPlay ();
    }).mouseleave(function() {
        if(tech_timer) clearInterval(tech_timer);
    });
    //鼠标滑进li标签 关闭轮播，显示对应div
    $('#teach li').mouseenter(function() {
        if(tech_timer) clearInterval(tech_timer);
        tech_index = $(this).index();
        $(this).addClass('current')
        .siblings().removeClass('current');
        $('#teach .parten').eq(tech_index).stop(true,false).show(500)
        .siblings().stop(true,false).hide(500);
    });
    //鼠标滑出ul标签 开启轮播，显示对应div
    $('#teach .teach_tab').mouseleave(function() {
        teachAutoPlay ();
    })
    //教学部分轮播函数
    function teachAutoPlay () {
        if(tech_timer) clearInterval(tech_timer);
        tech_timer = setInterval(function(){
            tech_index ++;
            if(tech_index == tech_lis.length) {
                tech_index = 0;
            }
            tech_lis.eq(tech_index).addClass('current')
                .siblings().removeClass('current');
            tech_part.eq(tech_index).stop(true,false).show(500)
                .siblings().stop(true,false).hide(500);
        },2000);
    }
});

