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
  menu.click(() => {
    menu.toggleClass("menu--expanded");

    // Logo Name
    menuLogoName.toggleClass("menu__logo-name--expanded");
    var updateText;
    if (menuLogoName.text() == "HN.") {
      updateText = "Henry Shi Jia Nguyen";
    } else {
      updateText = "HN.";
    }
    menuLogoName.empty();
    typeNameAnimation(updateText, 0);

    // Logo Role
    menuLogoRole.toggleClass("menu__logo-role--expanded");
    menuLogoIcons.toggleClass("menu__logo-icons--expanded");

    // Navigation Link
    navigationLink.toggleClass("navigation__link--expanded");
    navigationLinkText.toggleClass("navigation__link-text--expanded");

    // External Link
    linksItem.toggleClass("links__item--expanded");
    linksItemText.toggleClass("links__item-text--expanded");

    body.toggleClass("expanded");
  });

  onLoad();
});
