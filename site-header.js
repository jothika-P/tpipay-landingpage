(() => {
  const certificationItems = [
    {
      src: "image/all_images/pic-dss.jpeg",
      alt: "PCI DSS Certified",
      title: "PCI DSS",
      description: "A payment-card security standard focused on protecting cardholder data."
    },
    {
      src: "image/all_images/dpiit.jpeg",
      alt: "DPIIT Startup India recognition",
      title: "DPIIT Startup India",
      description: "Recognition connected with the Government of India's Startup India initiative."
    },
    {
      src: "image/all_images/iso.jpeg",
      alt: "ISO 27001 certified",
      title: "ISO 27001",
      description: "An international standard for information security management systems."
    }
  ];

  function initializeStickyImages() {
    const icons = document.createElement("aside");
    icons.className = "sticky-site-image-icons";
    icons.setAttribute("aria-label", "TPIPAY certifications");
    icons.innerHTML = certificationItems
      .map((item, index) => `
        <div class="sticky-site-image-item" tabindex="0" aria-describedby="site-certification-tooltip-${index + 1}">
          <img src="${item.src}" alt="${item.alt}">
          <div class="sticky-site-image-tooltip" id="site-certification-tooltip-${index + 1}" role="tooltip">
            <strong>${item.title}</strong>
            <p>${item.description}</p>
          </div>
        </div>
      `)
      .join("");
    document.body.append(icons);
  }

  function initializeMobileNavigation() {
    const navToggle = document.querySelector(".header-section .menu-toggle");
    const mainNav = document.querySelector(".header-section .main-nav");
    if (!navToggle || !mainNav) return;

    const mobileBreakpoint = window.matchMedia("(max-width: 1050px)");
    const resetDropdowns = () => {
      mainNav.querySelectorAll(".nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
      mainNav.querySelectorAll(".nav-dropdown-toggle").forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });
    };
    const setMenuOpen = (open) => {
      if (!open) resetDropdowns();
      mainNav.classList.toggle("open", open);
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      mainNav.setAttribute("aria-hidden", mobileBreakpoint.matches && !open ? "true" : "false");
      document.body.classList.toggle("mobile-navigation-open", open && mobileBreakpoint.matches);
    };

    resetDropdowns();
    mainNav.classList.remove("open", "active");
    setMenuOpen(false);

    navToggle.addEventListener("click", () => {
      const opening = !mainNav.classList.contains("open");
      if (opening) resetDropdowns();
      setMenuOpen(opening);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileBreakpoint.matches) setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mainNav.classList.contains("open")) setMenuOpen(false);
    });
    window.addEventListener("pageshow", () => {
      resetDropdowns();
      setMenuOpen(false);
    });
    mobileBreakpoint.addEventListener("change", () => {
      resetDropdowns();
      setMenuOpen(false);
    });
  }

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

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initializeHeaderDropdowns();
      initializeMobileNavigation();
      initializeStickyImages();
    }, { once: true });
  } else {
    initializeHeaderDropdowns();
    initializeMobileNavigation();
    initializeStickyImages();
  }
})();
