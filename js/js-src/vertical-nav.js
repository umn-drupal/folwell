(function(Drupal, $) {
  Drupal.behaviors.folwellVerticalNav = {
    attach: function() {
      const self = this,
        menu = $('nav.folwell-vertical-nav'),
        parents = menu.find('.menu-item--expanded');
      parents.each(function(index, element) {
        const el = $(element),
          trigger = el.children('.expand-slug'),
          parent = $(this);
        parent.addClass('menu-closed');
        trigger.off('click').on({'click': $.proxy(self.click, self)}, null, {parent: parent, menu: el.children('.menu')});
      });
    },
    click: function(event) {
      event.preventDefault();
      if (event.data.parent.hasClass('menu-closed')) {
        event.data.parent.removeClass('menu-closed').addClass('menu-opened');
        $(event.target).attr('aria-expanded', 'true');
        event.data.menu.slideToggle(function() {
          $(this).find('button, a').first().focus();
        });
      } else if (event.data.parent.hasClass('menu-opened')) {
        $(event.target).removeAttr('aria-expanded');
        event.data.parent.removeClass('menu-opened').addClass('menu-closed');
        event.data.menu.slideUp();
      }
    }
  };
})(Drupal, jQuery);
