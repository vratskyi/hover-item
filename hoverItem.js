function hoverItem() {
  const container = document.querySelector("#hoverItemContainer");

  container.addEventListener("mouseenter", function(event) {
    if (event.target.matches("#hoverItem")) {
      event.target.classList.add("pulseNeon");
    }
  });

  container.addEventListener("mouseleave", function(event) {
    if (event.target.matches("#hoverItem")) {
      event.target.classList.remove("pulseNeon");
    }
  });
}

hoverItem();
