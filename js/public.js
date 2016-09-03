/**
 * Created by wangxueli on 2016/9/2.
 */
$(function(){
    //�����Ч��ʼ
    var cloud = document.getElementById("cloud");//���
    var ul = document.getElementById("navBar");
    var lis = ul.children;

    var lastPosition = 0;

    //��꾭��li �ý���ܹ���
    //��ÿһ��li����꾭���¼� ��꾭����ǰli �ý���ܹ���
    for (var i = 0; i < lis.length; i++) {
        //��ÿһ��li����꾭���¼�
        lis[i].onmouseover = function () {
            //�ý�� ������ �ܹ���
            //Ŀ�� ������꾭����li��offsetLeft
            var target = this.offsetLeft;
            animate(cloud, target);
        }
        //����뿪��ǰli cloudҪ��ȥ
        lis[i].onmouseout = function () {
            //�ý�� ������ �ܻ�ȥ
            animate(cloud, lastPosition);
        }
        //���liҪ��¼��ǰli��λ��
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

    //����һ����������λ��
    var distestence;
    //��������li��ǩʱ��
    $(".showpic>ul>li").mouseenter(function(){
        //��¼��ǰh3��λ��
        distestence= $(this).children("h3").position();
        // h3����ָ��λ��
        $(this).children("h3").stop().animate({"top":"80px","left":"100px"},1000);
        // p͸���Ƚ���Ϊ1
        $(this).children("p").stop().fadeIn(1000);
        // ��ǰli͸����Ϊ1
        // ����li͸����0.7
        // $(this).css("opacity",1).siblings().css("opacity",0.7);
        //��ǰli�����Ͻ��ƶ�10px;
        $(this).stop().animate({"top":"-10px","left":"5px"})
        //$(this).animate({"style>background":"-10px"},1000);
    })
    //����뿪��ʱ��ָ���ԭ����λ��
    $(".showpic>ul>li").mouseleave(function(){
        $(this).children("h3").stop().animate({"top":distestence.top+"px","left":
        distestence.left+"px"},1000);
        $(this).children("p").stop().fadeOut(1000);
        // $(".showpic>ul>li").css("opacity",0.9);
        $(this).stop().animate({"top":"0px","left":0})

    })
})