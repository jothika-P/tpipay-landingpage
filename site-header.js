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
    document.addEventListener("DOMContentLoaded", () => {
      initializeHeaderDropdowns();
      initializeStickyImages();
    }, { once: true });
  } else {
    initializeHeaderDropdowns();
    initializeStickyImages();
  }
})();
