!function(e,a){e.behaviors.folwellVerticalNav={attach:function(){const e=this,n=a("nav.folwell-vertical-nav"),t=n.find(".menu-item--expanded");t.each(function(n,t){const l=a(t),d=l.children(".expand-slug"),s=a(this);s.addClass("menu-closed"),d.off("click").on({click:a.proxy(e.click,e)},null,{parent:s,menu:l.children(".menu")})})},click:function(e){e.preventDefault(),e.data.parent.hasClass("menu-closed")?(e.data.parent.removeClass("menu-closed").addClass("menu-opened"),a(e.target).attr("aria-expanded","true"),e.data.menu.slideToggle(function(){a(this).find("button, a").first().focus()})):e.data.parent.hasClass("menu-opened")&&(a(e.target).removeAttr("aria-expanded"),e.data.parent.removeClass("menu-opened").addClass("menu-closed"),e.data.menu.slideUp())}}}(Drupal,jQuery);
//# sourceMappingURL=maps/vertical-nav.js.map