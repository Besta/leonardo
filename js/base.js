/*global $*/

(function () {
    'use strict';
    var breakpointMobile = 736;
    function toggleNav() {
        var scrollTop = $(document).scrollTop(),
            offset;
        if (window.innerWidth > breakpointMobile) {
            offset = 90;
        } else {
            offset = 20;
        }
        if (scrollTop > offset) {
            $('.js-nav').addClass("jscss-active");
        } else {
            $('.js-nav').removeClass("jscss-active");
        }
    }

    function setHeightWorksLine() {
        var height = 0;
        $('.js-works').each(function() {
            height += $(this).height();
        });
        $('.js-works-line').height(height - 20); //20px margin bottom
    }

    function setActiveLink() {
        var min = 99999999,
            num = 0,
            numActive = $('.js-nav__link.jscss-nav__link--active').data('menunav');
        $('.js-nav-content').each(function() {
            var val = Math.abs($(this).offset().top - ($("body").scrollTop() + 60));
            if(val < min ) {
                min = val;
                num = $(this).data("menu");
            }
        });
        if(num != numActive) {
            $(".js-nav-link").removeClass("jscss-nav__link--active");
            $(".js-nav-link[data-menunav=" + num + "]").addClass("jscss-nav__link--active");
        }
    }

    function onScrollHandler(event) {
        toggleNav();
        setActiveLink();
    }

    function onResizeHandler(event) {
        toggleNav();
        setHeightWorksLine();
    }

    function onClickNavHandler(event) {
        var element = $("[data-menu="+$(this).data("menunav")+"]");
        if (element.length > 0) {
            var scrollTop = element.offset().top,
                navHeight = $('.js-nav').height() + 60;

            $(".js-nav-link").removeClass("jscss-nav__link--active");
            $("body").animate({"scrollTop" : scrollTop - navHeight}, 300);
            $(this).addClass("jscss-nav__link--active");
        }
    }

    function onClickThumbs(event) {
      $(".js-image").attr("src", $(this).data("src"));
      if($(window).width() < 736) {
        $(".js-photos-image").addClass("ip-photos__image--active");
      }
    }

    function onClickArrow(event) {
        var scroll = $(this).data("scroll");
        $(".js-gallery").animate({
          "scrollLeft" :  $(".js-gallery").scrollLeft() + scroll
        }, 200);
    }

    function onClickClose(event) {
      $(".js-photos-image").removeClass("ip-photos__image--active");
    }

    $(document).ready(function () {
        $(document)
            .on("scroll", onScrollHandler);
        $(window)
            .on("resize", onResizeHandler);
        $('.js-nav-link').
            on("click", onClickNavHandler)
        $('.js-thumb').
            on("click", onClickThumbs);
        $('.js-navigation').
            on("click", onClickArrow);
        $('.js-photos-close').
            on("click", onClickClose);

        $("#lightgallery").lightGallery({
            thumbnail: false,
            selector: ".js-photo"
        });
        setHeightWorksLine();
    });
}());



//easter egg se scrivi "leonario" succede qualcosa(ti manda all'armory di leo)
