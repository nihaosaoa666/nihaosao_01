$(function () {
    var stTop = $('.jrtj').offset().top;

    xs();

    //节流阀
    var flag = true;

    $(window).scroll(function () {
        xs();
        if (flag) {
            $('.floor>.w').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.dianti li').eq(i).addClass('bgColorRed').siblings().removeClass();
                }
            });
        }

        if ($(document).scrollTop() >= $('.floor').offset().top) {
            $('.hddb').fadeIn();
        } else {
            $('.hddb').fadeOut();
        }
    });

    $('.dianti li').click(function () {
        var index = $(this).index();
        flag = false;
        var Y = $('.floor>.w').eq(index).offset().top;
        $('body, html').stop().animate({
            scrollTop: Y
        }, function() {
            flag = true;
        });

        $(this).addClass('bgColorRed').siblings().removeClass();
    });

    $('.hddb').click(function() {
        $('body, html').stop().animate({
            scrollTop : 0
        });
    });

    function xs() {
        if ($(document).scrollTop() >= stTop) {
            $('.dianti').fadeIn();
        } else {
            $('.dianti').fadeOut();
        }
    }
});