(function() {
  $(function() {
    $(".share").on("click", function() {
      var pop_menu;
      pop_menu = $(this).parent().find(".pop-menu");
      pop_menu.css("display", "block");
      $(document).on("mouseup touchend", function(e) {
        pop_menu.css("display", "none");
        return $(document).off("mouseup touchend");
      });
      return false;
    });
    if ($(".page-index").length) {
      $(".post").each(function() {
        console.log($(this).find(".caption").height());
        if ($(this).find(".caption").height() >= 300) {
          return $(this).find(".more").css({
            "display": "block"
          });
        }
      });
    }
  });

}).call(this);
