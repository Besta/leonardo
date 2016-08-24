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

    function onScrollHandler(event) {
        toggleNav();
    }

    function onResizeHandler(event) {
        toggleNav();
    }

    $(document).ready(function () {
        $(document)
            .on("scroll", onScrollHandler);
        $(window)
            .on("resize", onResizeHandler);

        $("#lightgallery").lightGallery({
            thumbnail: false,
            selector: ".js-photo"
        });
    });
}());
