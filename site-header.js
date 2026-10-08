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

  function initializeProductsMegaMenu() {
    const mainNav = document.querySelector(".header-section .main-nav");
    const navList = mainNav?.querySelector(".divide > ul");
    const pagesItem = Array.from(navList?.querySelectorAll(":scope > .nav-item") || [])
      .find((item) => item.querySelector(":scope > a span")?.textContent.trim() === "Pages");
    if (!navList || !pagesItem || navList.querySelector(".product-nav-item")) return;

    const pagesDropdown = pagesItem.querySelector(":scope > .nav-dropdown");
    const productsPageLink = pagesDropdown && Array.from(pagesDropdown.querySelectorAll(":scope > li > a"))
      .find((link) => link.getAttribute("href") === "products.html");
    productsPageLink?.closest("li")?.remove();
    pagesItem.classList.add("pages-nav-item");
    const pagesLink = pagesItem.querySelector(":scope > a");
    if (pagesLink) pagesLink.href = "careers.html";

    const productColumns = [
      [
        {
          name: "HR Software",
          icon: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="15" height="13" rx="1"></rect><path d="M7 8h7M7 11h4"></path><circle class="product-icon-accent" cx="18" cy="16" r="3"></circle><path d="M16.5 16h3M18 14.5v3"></path></svg>'
        },
        {
          name: "Time Attendance Tracking",
          icon: '<svg viewBox="0 0 24 24"><circle cx="11" cy="12" r="8"></circle><path d="M11 7v5l3 2"></path><path class="product-icon-accent" d="m16 18 2 2 4-5"></path></svg>'
        },
        {
          name: "Leave Management Software",
          icon: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M7 3v4M17 3v4M3 10h18M7 14h2M12 14h2M7 17h2"></path></svg>'
        },
        {
          name: "Payroll Software",
          icon: '<svg viewBox="0 0 24 24"><path d="M6 3h10l4 4v14H6zM16 3v5h4M10 12h6M10 16h6"></path><path class="product-icon-accent" d="M3 8h4M2 11h5"></path></svg>'
        },
        {
          name: "Payroll Outsourcing Services",
          icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"></circle><circle cx="5" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><path d="M6 21v-2a6 6 0 0 1 12 0v2M1 20v-1a4 4 0 0 1 5-4M23 20v-1a4 4 0 0 0-5-4"></path></svg>'
        }
      ],
      [
        {
          name: "Claims Management Software",
          icon: '<rect x="4" y="3" width="16" height="18" rx="2"></rect><path class="product-icon-accent" d="M8 8h8M8 12h8M8 16h5"></path>'
        },
        {
          name: "Performance Appraisal Software",
          icon: '<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M6 17h12M7 15l3-4 3 2 4-5"></path><path class="product-icon-accent" d="M16 8h2v2"></path>'
        },
        {
          name: "Employee Engagement Software",
          icon: '<circle cx="12" cy="6" r="3"></circle><circle cx="5" cy="10" r="2"></circle><circle cx="19" cy="10" r="2"></circle><path d="M7 20v-2a5 5 0 0 1 10 0v2M1 19v-2a4 4 0 0 1 5-4M23 19v-2a4 4 0 0 0-5-4"></path><path class="product-icon-accent" d="M12 12v3"></path>'
        },
        {
          name: "Human Resource Software",
          icon: '<rect x="5" y="4" width="14" height="17" rx="2"></rect><path d="M9 3h6v3H9zM9 11h6M9 15h6"></path><path class="product-icon-accent" d="m7 13 1 1 2-2"></path>'
        }
      ],
      [
        {
          name: "Applicant Tracking System",
          icon: '<rect x="5" y="4" width="14" height="17" rx="2"></rect><path d="M9 3h6v4H9zM9 11h6M9 15h6"></path><path class="product-icon-accent" d="m17 12 1 1 2-2"></path>'
        },
        {
          name: "Learning Management System",
          icon: '<path d="M3 6h7a4 4 0 0 1 4 4v10a4 4 0 0 0-4-4H3zM21 6h-3a4 4 0 0 0-4 4"></path><path class="product-icon-accent" d="M17 9v8M14 13h6"></path>'
        },
        {
          name: "Employee Field Tracking Software",
          icon: '<path d="M3 14h5l2 2h4l2-2h5v6h-5l-2-2h-4l-2 2H3z"></path><path d="M12 11s-4-3-4-6a4 4 0 1 1 8 0c0 3-4 6-4 6Z"></path><circle class="product-icon-accent" cx="12" cy="5" r="1"></circle>'
        },
        {
          name: "CRM Software",
          icon: '<rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path><path class="product-icon-accent" d="M6 7h12"></path><text x="5" y="13" fill="currentColor" stroke="none" font-size="6" font-weight="700">CRM</text>'
        }
      ]
    ];

    const productItem = document.createElement("li");
    productItem.className = "nav-item has-dropdown product-nav-item";

    const productLink = document.createElement("a");
    productLink.href = "products.html";
    productLink.innerHTML = "<span>Products</span>";

    const toggle = document.createElement("button");
    toggle.className = "nav-dropdown-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Show Products menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span class="nav-chevron" aria-hidden="true"></span>';

    const dropdown = document.createElement("ul");
    dropdown.className = "nav-dropdown product-mega-dropdown";
    dropdown.id = "productDropdown";
    dropdown.setAttribute("aria-label", "Products");
    toggle.setAttribute("aria-controls", dropdown.id);

    const heading = document.createElement("li");
    heading.className = "product-mega-heading";
    heading.textContent = "Products";
    dropdown.append(heading);

    productColumns.forEach((entries) => {
      const column = document.createElement("li");
      column.className = "product-mega-column";

      const list = document.createElement("ul");
      list.className = "product-mega-links";
      entries.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.className = "product-mega-entry";

        const link = document.createElement("a");
        link.href = "products.html#productGrid";
        link.innerHTML = `<span class="product-mega-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${entry.icon}</svg></span><span>${entry.name}</span>`;

        listItem.append(link);
        list.append(listItem);
      });

      column.append(list);
      dropdown.append(column);
    });

    productItem.append(productLink, toggle, dropdown);
    navList.insertBefore(productItem, pagesItem);
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
      initializeProductsMegaMenu();
      initializeHeaderDropdowns();
      initializeMobileNavigation();
      initializeStickyImages();
    }, { once: true });
  } else {
    initializeProductsMegaMenu();
    initializeHeaderDropdowns();
    initializeMobileNavigation();
    initializeStickyImages();
  }
})();
