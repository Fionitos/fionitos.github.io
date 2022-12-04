const mc = new Hammer(document.body);
const swipeMenu = document.querySelector('#swipeMenu').classList;
const activeClassMenu = 'swipe-menu--show';

mc.on("swipeleft swiperight", function(ev) {
  if(ev.type === "swipeleft") {
    swipeMenu.remove(activeClassMenu);
  }
  else {
    swipeMenu.add(activeClassMenu);
  }
});