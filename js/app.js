function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);
}


window.onload = function() {
    var $toggle = document.querySelector(".site__right-sidebar-toggle");
    $toggle.addEventListener("click",function() {
      document.body.classList.toggle("js-show-right-sidebar");
    });

    makeCartScrollNicely();
}

