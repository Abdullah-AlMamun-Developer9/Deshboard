(function ($) {
    "use strict";

    $(".menu-btn").on("click", function () {
        $(".sidebar").toggleClass("toggle-menu");
        $(".menu-btn").toggleClass("menuopenclose");
      });

})(jQuery);
