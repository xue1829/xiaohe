/**
 * Created by wangxueli on 2016/9/2.
 */
$(function(){

    //ͼƬ������Ч
    var bigBg=document.getElementById("bigBg")
    var bg_pic = {
        position: 0
    }

    //2.�ƶ�����
    setInterval(function () {
        //������յı���
        bg_pic.position = bg_pic.position - 3;
        //������յı�����λ��
        bigBg.style.backgroundPositionX = bg_pic.position + "px";
    }, 25)//��Ԥ�ȵ���









})