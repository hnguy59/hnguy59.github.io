$(function () {
  // Prepare
  // Menu
  var menu = $(".menu");
  var menuLogo = menu.find(".menu__logo");
  var menuLogoName = menuLogo.find(".menu__logo-name");
  var menuLogoRole = menuLogo.find(".menu__logo-role");
  var menuLogoIcons = menuLogo.find(".menu__logo-icons");
  var menuNavigationn = menu.find(".menu__navigation");
  var menuLinks = menu.find(".menu__links");

  var navigation = menu.find(".navigation");
  var navigationLink = navigation.find(".navigation__link");
  var navigationLinkText = navigationLink.find(".navigation__link-text");
  var links = menu.find(".links");
  var linksItem = links.find(".links__item");
  var linksItemText = links.find(".links__item-text");

  // Body
  var body = $("body");

  // FUNCTIONS
  function typeNameAnimation(name, iteration) {
    if (iteration === name.length) return;

    setTimeout(function () {
      menuLogoName.text(menuLogoName.text() + name[iteration++]);

      typeNameAnimation(name, iteration);
    }, 50);
  }

  function onLoad() {
    menuLogoName.empty();
    typeNameAnimation("HN.", 0);
  }

  // HANDLERS
  menu.hover(
    () => {
      menu.addClass("menu--expanded");

      // Logo Name
      menuLogoName.addClass("menu__logo-name--expanded");
      menuLogoName.empty();
      typeNameAnimation("Henry Shi Jia Nguyen", 0);

      // Logo Role
      menuLogoRole.addClass("menu__logo-role--expanded");
      menuLogoIcons.addClass("menu__logo-icons--expanded");

      // Navigation Link
      navigationLink.addClass("navigation__link--expanded");
      navigationLinkText.addClass("navigation__link-text--expanded");

      // External Link
      linksItem.addClass("links__item--expanded");
      linksItemText.addClass("links__item-text--expanded");

      body.addClass("expanded");
    },
    () => {
      menu.removeClass("menu--expanded");

      // Logo Name
      menuLogoName.removeClass("menu__logo-name--expanded");
      menuLogoName.empty();
      typeNameAnimation("HN.", 0);

      // Logo Role
      menuLogoRole.removeClass("menu__logo-role--expanded");
      menuLogoIcons.removeClass("menu__logo-icons--expanded");

      // Navigation Link
      navigationLink.removeClass("navigation__link--expanded");
      navigationLinkText.removeClass("navigation__link-text--expanded");

      // External Link
      linksItem.removeClass("links__item--expanded");
      linksItemText.removeClass("links__item-text--expanded");

      body.removeClass("expanded");
    }
  );

  onLoad();
});
