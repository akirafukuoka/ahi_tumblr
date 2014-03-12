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
  });

}).call(this);
