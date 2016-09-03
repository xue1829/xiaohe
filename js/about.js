/**
 * Created by think on 2016/5/15.
 */
$(function () {

    //企业文化图片放上去显示文字
    $("#qywh_img").mouseenter(function () {
        $("#qywh_circle").stop().animate({
            "left": "385px",
            "top": "125px"
        }, function () {
            $("#qywh_sm").stop().fadeIn(function () {
                $("#qywh_circle").stop().animate({
                    "left": "598px",
                    "top": "125px"
                }, function () {
                    $("#qywh_yj").stop().fadeIn(function () {
                        $("#qywh_circle").stop().animate({
                            "left": "598px",
                            "top": "339px"
                        }, function () {
                            $("#qywh_circle").stop().animate({
                                "left": "385px",
                                "top": "339px"
                            }, function () {
                                $("#qywh_jzg").stop().fadeIn();
                            });
                        });
                    });
                });
            });
        });
    });
    //企业文化图片移走隐藏
    $("#g2").next().mouseleave(function () {
        $(".us_center1 .qywh").stop().fadeOut();
    });


    ////团队实力动画实现
    //$(".team_time").mouseenter(function () {
    //    $(this).next().stop().slideDown(600);
    //});
    //
    //$("#g3").next().mouseleave(function () {
    //    $(".team").slideUp(600);
    //});

    $("#g3").next().mouseenter(function () {
        $("#team_sjz0 img:eq(0)").stop().fadeIn(600, function () {
            $("#team_sjz1").stop().slideDown(600, function () {
                $("#team_sjz0 img:eq(1)").stop().fadeIn(600, function () {
                    $("#team_sjz2").stop().slideDown(600, function () {
                        $("#team_sjz0 img:eq(2)").stop().fadeIn(600, function () {
                            $("#team_sjz3").stop().slideDown(600, function () {
                                $("#team_sjz0 img:eq(3)").stop().fadeIn(600, function () {
                                    $("#team_sjz4").stop().slideDown(600);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

/**
 * Created by yang on 2016/5/15.
 */
//获取对象
$(function () {
    //鼠标移入
    $("#kongHeZi").mouseenter(function () {
        $("#redPoint").fadeIn();
    });
    //鼠标移出
    $("#kongHeZi").mouseleave(function () {
        $("#redPoint").fadeOut();
    });

    //理念优势
    $("#revolution").mouseenter(function () {
        //开始动画前改变元素状态
        $(".three").css("display", "block");

        //向目标位置出发
        $("#threeBlue").animate({
            "top": -3,
            "left": 705,
        }, 500);
        $("#threeGreen").animate({
            "top": 125,
            "left": 627,
        }, 500);
        $("#threeYellow").animate({
            "top": 124,
            "left": 766,
        }, 500);
    });

    $("#g4").next().mouseleave(function () {

        $("#threeBlue").animate({
            "top": 91,
            "left": 705,
        }, 500);
        $("#threeGreen").animate({
            "top": 98,
            "left": 705,
        }, 500);
        $("#threeYellow").animate({
            "top": 89,
            "left": 689,
        }, 500);

        $(".three").css("display", "none");
    });

});

$(function () {
    //头部导航背景滑块
    $(".nav_wrapper").movebg({
        width: 110/*滑块的大小*/,
        extra: 10/*额外反弹的距离*/,
        speed: 200/*滑块移动的速度*/,
        rebound_speed: 200/*滑块反弹的速度*/
    });

    //右下导航显示隐藏控制
    function b() {
        h = $(window).height() - 500;
        t = $(document).scrollTop();
        if (t > h) {
            $('.right_hg').show();
        } else {
            $('.right_hg').hide();
        }
    }
    $(document).ready(function (e) {
        b();
        $('.right_hg').click(function () {
            $(document).scrollTop(0);
        })
    });
    $(window).scroll(function (e) {
        b();
    });
});
