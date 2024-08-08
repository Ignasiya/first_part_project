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
