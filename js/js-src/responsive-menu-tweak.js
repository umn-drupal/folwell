(function(Drupal, $) {
  Drupal.behaviors.responsiveMenuTweak = {
    attach: function() {
      var navbar = $(".mm-navbar"),
        wordmark =
          '<img id="mobile-nav-m" src="/themes/custom/folwell/images/branding/wordmarks/M-wordmark.png" alt="UMN block M wordmark">',
        closeButton =
          '<a class="mm-btn" id="close-nav" href="#mm-0" aria-owns="mm-0" aria-label="close menu"></a>';
      if (!navbar.hasClass("wordmarked")) {
        navbar.append(wordmark).append(closeButton);
        navbar.addClass("wordmarked");
      }
      $(".mm-tabstart").attr("aria-label", "tab start button");
      $(".mm-tabend").attr("aria-label", "tab end button");
    }
  };
})(Drupal, jQuery);
