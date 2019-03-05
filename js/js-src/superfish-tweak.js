(function(Drupal, $) {
  Drupal.behaviors.superfishTweak = {
    attach: function() {
      var menu = $(".sf-horizontal"),
        self = this;
      this.init(menu);
      menu
        .find("a.menuparent, span.nolink")
        .attr("aria-haspopup", "true")
        .attr("aria-expanded", "false");
      this.removeTabIndex(menu);
      $(document).on({
        mouseup: function(event) {
          if (menu.not(event.target) && menu.has(event.target).length === 0) {
            self.removeTabIndex(menu);
          }
        },
        keyup: function(event) {
          if (event.which === 27) {
            $(document).trigger("mouseup");
          }
        },
        focusin: function(event) {
          if (menu.has(event.target).length === 0) {
            $(document).trigger("mouseup");
          }
        }
      });
    },

    init: function(menu) {
      var self = this,
        parents = menu.children("li.menuparent"),
        topLevel;
      // Remove superfish's native hover behavior
      if (parents.length > 0) {
        parents.unbind("mouseenter mouseleave");
        parents.find("a, span.nolink").unbind("focus blur");
        topLevel = parents.children("a.menuparent, span.nolink");
        topLevel.on({
          "click touchstart": $.proxy(self.handleClick, self),
          "keyup keydown": $.proxy(self.handleKey, self)
        });
      }
      menu
        .children("li")
        .children("a, span.nolink")
        .attr("tabindex", "0");
      // deInit any siblings
      var siblings = menu
        .parent("li")
        .siblings(".menuparent")
        .children("ul");
      siblings.each(function(index, item) {
        var menu = $(item);
        self.deInit(menu);
      });
    },

    deInit: function(menu) {
      this.removeTabIndex(menu);
      menu
        .find("a.menuparent, span.nolink")
        .off("keyup keydown")
        .off("click touchstart", $.proxy(this.handleClick, this));
    },

    handleKey: function(event) {
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        if (event.type === "keyup") {
          $(event.target).trigger("click");
        }
      }
    },

    handleClick: function(event) {
      var clicked = $(event.target),
        sfClicked,
        submenu;
      // Superfish applies class before we act here.
      sfClicked = clicked.hasClass("sf-clicked");
      submenu = clicked.siblings("ul");
      if (sfClicked) {
        clicked
          .parent("li")
          .siblings(".menuparent")
          .children("a.menuparent, span.nolink")
          .attr("aria-haspopup", "true")
          .attr("aria-expanded", "false");
        clicked.attr("aria-haspopup", "false").attr("aria-expanded", "true");
        this.init(submenu);
      } else {
        clicked.attr("aria-haspopup", "true").attr("aria-expanded", "false");
        this.deInit(submenu);
      }
    },

    removeTabIndex: function(menu) {
      var removalTargets;
      if (menu.hasClass("sf-horizontal")) {
        removalTargets = menu.find(".sf-depth-2 a, .sf-depth-2 span.nolink");
      } else {
        removalTargets = menu.find("a, span.nolink");
      }
      removalTargets.attr("tabindex", "-1");
    }
  };
})(Drupal, jQuery);
