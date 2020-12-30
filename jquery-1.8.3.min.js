var i = 0;
var timer = null;
$(function () {
    //除第一个图片，其他隐藏
   $(".ig").eq(0).show().siblings().hide();
   //鼠标移动覆盖显示，其余隐藏
   $("#igs").hover(function () { $(".btn").show(); }, function () { $(".btn").hide(); });
   showTime();
   //覆盖停止时间
   $(".tab").hover(function () {
       i = $(this).index();
       Show();
       clearInterval(timer);//清除轮播
   }, function () {
       showTime();
   });
//点击 > 事件
   $(".btn1").click(function () {
       clearInterval(timer);
       i = (i+5)%6;
       Show();
       showTime();
   });
   //点击 < 事件
    $(".btn2").click(function () {
        clearInterval(timer);
        i = (i+1)%6;
        Show();
        showTime();
    });
});
//点击圆点事件
function Show() {
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("lp").siblings().removeClass("lp");
}
function showTime() {
    timer = setInterval(function () {
        i++;
        i = i%6;
        Show();
    },3000);
}