import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
const colors = ["#FF0000", "#0066CC", "#6600CC", "#00CCCC"];
const title = document.getElementById("title");
const superEventHandler = {
  enter: function () {
    title.style.color = colors[3];
    title.innerHTML = "The mouse is here!";
  },
  leave: function () {
    title.style.color = colors[1];
    title.innerHTML = "The mouse is gone!";
  },
  size: function () {
    title.style.color = colors[2];
    title.innerHTML = "you just resized!";
  },
  down: function (event) {
    title.style.color = colors[0];
    title.innerHTML = "That was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.enter);
title.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.size);
window.addEventListener("contextmenu", superEventHandler.down);
