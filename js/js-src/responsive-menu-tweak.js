(function(Drupal, $) {

  Drupal.behaviors.responsiveMenuTweak = {
    attach: function() {
      var navbar = $('.mm-navbar'),
          wordmark = '<img id="mobile-nav-m" src="/themes/custom/folwell/images/branding/wordmarks/M-wordmark.png">',
          closeButton = '<a class="mm-btn" id="close-nav" href="#mm-0" aria-owns="mm-0"></a>';
      if (!navbar.hasClass('wordmarked')) {
        navbar.append(wordmark).append(closeButton);
        navbar.addClass('wordmarked');
      }
    }
  };

})(Drupal, jQuery);