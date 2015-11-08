function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);
}


window.onload = function() {
  makeCartScrollNicely();
  console.log("page loaded");
}

var $toggle = document.querySelector(".site__right-sidebar-toggle");
