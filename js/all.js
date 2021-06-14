$(function () {
    $('.icon_item .icon_open').click(function () {
        $('nav').addClass('left');
    });
    $('.icon_item .icon_close .fa-times').click(function () {
        $('nav').removeClass('left');
    });

    $('.banner .slick_banner').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed:2000
    });

    $('.news .new_slick').slick({
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });
    //當導覽列點下去時，會對應到所屬的target
    $('nav').find('a').click(function () {
        let target = $(this).data('target');
        let t = $(target).offset().top - $('nav').height() - 10;
        $('html,body').animate({
            scrollTop: t,
        });
        $('nav').removeClass('left');
        return false;
    });
    $(window).scroll(function (e) {
        let win_h = $(window).scrollTop();
        (win_h > 10) ? $("body").addClass("is_scroll") : $("body").removeClass("is_scroll");

    });
    /////GOTOP特效/////
    $('.top').click(function(){
        $('html,body').animate({
            scrollTop:0
    })
        return false;
    });
    $(window).scroll(function(){
        let h = $(window).scrollTop();
        if(h > 300){
            $('.fixed_btn').addClass('fixed');
        }else{
            $('.fixed_btn').removeClass('fixed');
        }
    });
    var wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated'
        }
      );
      wow.init();

});
