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

    function onScrollHandler(event) {
        toggleNav();
        //TODO gestire nav allo scroll
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

    $(document).ready(function () {
        $(document)
            .on("scroll", onScrollHandler);
        $(window)
            .on("resize", onResizeHandler);
        $('.js-nav-link').
            on("click", onClickNavHandler)

        $("#lightgallery").lightGallery({
            thumbnail: false,
            selector: ".js-photo"
        });
        setHeightWorksLine();
    });
}());



//easter egg se scrivi "leonario" succede qualcosa(ti manda all'armory di leo)
