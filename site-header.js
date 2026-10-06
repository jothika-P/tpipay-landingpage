(() => {
  function initializeHeaderDropdowns() {
    document.querySelectorAll(".header-section .nav-dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const item = toggle.closest(".nav-item");
        if (!item) return;

        const willOpen = !item.classList.contains("is-open");
        item.parentElement.querySelectorAll(".nav-item.is-open").forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove("is-open");
            openItem.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("is-open", willOpen);
        toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    });

    document.querySelectorAll(".header-section .main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        const nav = link.closest(".main-nav");
        if (window.matchMedia("(max-width: 1050px)").matches && nav) {
          nav.classList.remove("open", "active");
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll(".header-section .nav-item.is-open").forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      });
      document.querySelectorAll(".header-section .main-nav.open, .header-section .main-nav.active").forEach((nav) => {
        nav.classList.remove("open", "active");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHeaderDropdowns, { once: true });
  } else {
    initializeHeaderDropdowns();
  }
})();
