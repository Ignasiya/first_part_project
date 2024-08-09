const elBtnOpenSidebar = document.querySelector("#openSidebar");
const elBtnCloseSidebar = document.querySelector("#closeSidebar");
const elSidebar = document.querySelector("#sidebarOverlay");
const elShadingBackground = document.querySelector("#shadingBackground");

elBtnOpenSidebar.addEventListener("click", () => {
  elSidebar.classList.toggle("sidebar--show");
  elShadingBackground.classList.toggle("shading-background--show");
});

elBtnCloseSidebar.addEventListener("click", () => {
  elSidebar.classList.toggle("sidebar--show");
  elShadingBackground.classList.toggle("shading-background--show");
});

// elBtnOpenSidebar.addEventListener("keydown", (event) => {
//   if (event.key === " " || event.key === "Enter") {
//     event.preventDefault();
//     elBtnOpenSidebar.click();
//   }
// });

// elBtnCloseSidebar.addEventListener("keydown", (event) => {
//   if (event.key === " " || event.key === "Enter") {
//     event.preventDefault();
//     elBtnCloseSidebar.click();
//   }
// });
