document.addEventListener("DOMContentLoaded", () => {
  // Create frame wrapper
  const frame = document.createElement("div");
  frame.classList.add("js-frame");

  // Move all existing body children into the frame
  while (document.body.firstChild) {
    frame.appendChild(document.body.firstChild);
  }

  // Append the frame to body
  document.body.appendChild(frame);
});