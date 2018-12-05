$(document).ready(function() {
    // 切换登录注册
    $('.tab>a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');
        $('.form_box>div').not(target).hide();
        $(target).fadeIn(600);
    });
    // 切换登录方式
    $('.xz>label').on('change', function(e) {

        e.preventDefault();
        url = $(this).attr('href');
        $('.user_denglu>div').not(url).toggle();
        $(url).fadeIn(600);
    });
    //密码可见切换(鼠标按下可见，松开隐藏)
    var eye_input = $('.user_denglumima>input');
    $('.user_denglumima>p').on('mousedown', function() {
        eye_input.attr('type', 'text');
    });
    $('.user_denglumima>p').on('mouseup', function() {
        eye_input.attr('type', 'password');
    });
    // 点击城市开关城市列表
    var city_box = $('.city_box');
    $('.city_name>span>a').on('click',function() {
        city_box.toggle();
        $('.jiao1').toggle();
    });
    //点击关闭城市列表
    $('.close>i').on('click',function() {
        city_box.hide();
        $('.jiao1').hide();
    });
    //城市切换
    $('.city>li a').on('click',function() {
        $('.city_name a').text($(this).text());
    });

});