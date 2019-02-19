new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        init(){
            slide1Ani();
        },
        slideChangeTransitionEnd:function () {
            if(this.activeIndex===0){
                slide1Ani();
            }else {
                slide1Init();
            }
        }
    }
});
function slide1Ani() {
    $(".swiper-wrapper:eq(0) .box1").addClass("active").siblings(".box2").addClass("active").siblings(".box3").addClass("active").siblings(".dl1").addClass("active");
}
function slide1Init() {
    $(".swiper-wrapper:eq(0) .box1").removeClass("active").siblings(".box2").removeClass("active").siblings(".box3").removeClass("active").siblings(".dl1").removeClass("active");
}

$(".music").click(function () {
    if($(this).hasClass("play")){
        document.querySelector("audio").pause();
    }else {
        document.querySelector("audio").play();
    }
    $(this).toggleClass("play");
});
