const cambiaColore = function () {
  let header = document.querySelector("header");
  let distance = header.offsetTop;

  let button = document.getElementById("bottone");
  if (distance > 350) {
    header.classList.add("diventaBianca");
    button.classList.add("diventaVerde");
  } else {
    header.classList.remove("diventaBianca");
    button.classList.remove("diventaVerde");
  }
};

window.onscroll = function () {
  cambiaColore();
};
