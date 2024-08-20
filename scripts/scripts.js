const elBtnOpenSidebar = document.querySelector("#openSidebar");
const elBtnCloseSidebar = document.querySelector("#closeSidebar");
const elSidebar = document.querySelector("#sidebarOverlay");
const elShadingBackground = document.querySelector("#shadingBackground");
const elsNavigateShowToggle = document.querySelectorAll(".navbar__show-toggle");

elBtnOpenSidebar?.addEventListener("click", () => {
  elSidebar.classList.toggle("sidebar--show");
  elShadingBackground.classList.toggle("shading-background--show");
});

elBtnCloseSidebar?.addEventListener("click", () => {
  elSidebar.classList.toggle("sidebar--show");
  elShadingBackground.classList.toggle("shading-background--show");
});

elsNavigateShowToggle?.forEach((el) => {
  el.addEventListener("click", () => {
    const elList = el.previousElementSibling;
    el.classList.toggle("show-toggle--active");
    elList.classList.toggle("navbar__list--show-all");

    if (el.classList.contains("show-toggle--active")) {
      el.lastElementChild.textContent = "Скрыть";
    } else {
      el.lastElementChild.textContent = "Показать все";
    }
  });
});

class SliderGallery {
  constructor(options = {}) {
    this.options = options;
    this.breakpoints = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    };
    this.slider = null;

    if (this.slider === null) {
      window.addEventListener("resize", this.handleResizeWindow.bind(this));
      this.handleResizeWindow(window);
    }
  }

  get _breakpoints() {
    return this._breakpoints;
  }

  set _breakpoints(val) {
    return (this._breakpoints = val);
  }

  get _options() {
    return this.options;
  }

  set _options(val) {
    return (this._options = val);
  }

  handleResizeWindow(event) {
    const { innerWidth = 0 } = event?.target || event;

    if (innerWidth > this.breakpoints[this.options.breakpoint]) {
      this.destroy();
      return;
    }
    this.init();
  }

  init() {
    if (this.slider !== null) return;
    this.slider = new Swiper(this.options.el, {
      ...(this.options.sliderOptions || {}),
    });
  }

  destroy() {
    if (this.slider === null) return;
    this.slider.destroy();
    this.slider = null;
  }
}

new SliderGallery({
  el: ".mySwiper",
  breakpoint: "md",
  sliderOptions: {
    spaceBetween: 24,
    width: 272,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  },
});

// let mySwiper;

// function initSwiper() {
//   if (window.innerWidth < 768) {
//     if (!mySwiper) {
//       mySwiper = new Swiper(".mySwiper", {
//         spaceBetween: 24,
//         width: 272,
//         height: 280,
//         pagination: {
//           el: ".swiper-pagination",
//           dynamicBullets: true,
//         },
//       });
//     }
//   } else {
//     if (mySwiper) {
//       mySwiper.destroy(true, true);
//       mySwiper = null;
//     }
//   }
// }

// window.addEventListener("resize", initSwiper);
// initSwiper();
