document.addEventListener("DOMContentLoaded", () => {
  
  const frame = document.createElement("div");
  frame.classList.add("js-frame");

  while (document.body.firstChild) {
    frame.appendChild(document.body.firstChild);
  }

  document.body.appendChild(frame);
});