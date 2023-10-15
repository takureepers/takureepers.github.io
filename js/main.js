twemoji.parse(document.body);
$(window).scroll(function () {
    $(".js-markerScrollAnimation").each(function () {
        var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
        var scroll = $(window).scrollTop(); //スクロールの位置を取得
        var windowHeight = $(window).height(); //ウインドウの高さを取得
        if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
            $(this).addClass('is-active'); //クラス「active」を与える
        }
    });
});

$(document).ready(function () {
    $('.slide-items').bxSlider();
});

jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
        });
    });
});



const ua = window.navigator.userAgent;

if (ua.indexOf('Edge') != -1 || ua.indexOf('Edg') != -1) {
    console.log('Microsoft Edge');
} else if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {
    console.log('Microsoft Internet Explorer');
    location.href(msie.html);
} else if (ua.indexOf('OPR') != -1 || ua.indexOf('Opera') != -1) {
    console.log('Opera');
} else if (ua.indexOf('Chrome') != -1) {
    console.log('Google Chrome');
} else if (ua.indexOf('Firefox') != -1) {
    console.log('FireFox');
} else if (ua.indexOf('Safari') != -1) {
    console.log('Safari');
} else {
    console.log('Unknown');
}
