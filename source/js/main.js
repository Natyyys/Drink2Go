function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("js/swiper-bundle.js");
loadScript("js/swiper.js");
loadScript("js/menu.js");
