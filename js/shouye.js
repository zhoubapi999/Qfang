// 点击城市开关城市列表
var city_box = $('.city_box');
$('.city_name>span>a').on('click', function() {
    city_box.toggle();
    $('.jiao1').toggle();
});
//点击关闭城市列表
$('.close>i').on('click', function() {
    city_box.hide();
    $('.jiao1').hide();
});
//城市切换
$('.city>li a').on('click', function() {
    $('.city_name a').text($(this).text());
});
//双击打开列表
$('.sousuo_box>input').on('dblclick', function() {
    $('.list_box').show();
});
//关闭列表
$('.header:not(.list)').on('click', function() {
    $('.list_box').hide();
    return false;
});

// 文字上下轮播
var index = 0;
var lis = $('.lb1>li>a');
var height =lis.height();
var timer = setInterval(Func, 4000);;
// function lb1() {
//     if (index < lis.length - 1) {
//         index++;
//     } else {
//         index = 0;
//     }
//     var movePx = -index * 30 + "px"
//     $('.lb1').animate({ "marginTop": movePx }, 1000);
// }
function Func(){

    if(index < lis.length - 1){
        index ++;
        $('.lb1').animate({'marginTop':index*-30},500);
    }
    else{
        index = 0;
        $('.lb1').animate({'marginTop':lis.length*-30},500,function(){
            $('.lb1').css('marginTop',0);
        })
    }
}

//悬浮在窗口时停止轮播
$('.lb1>li>a').mouseenter(function() {
    clearInterval(timer);
})
//鼠标移除窗口时开始轮播
$('.lb1>li>a').mouseleave(function() {
    timer = setInterval(Func, 4000);
})