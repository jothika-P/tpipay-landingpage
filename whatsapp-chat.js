(() => {
  const SUPPORT_URL = "https://wa.me/918249616034?text=Hi%20TPIPAY%2C%20I%20need%20support.";
  const ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.58 0 .25 5.33.25 11.88c0 2.1.55 4.15 1.59 5.96L.15 24l6.31-1.66a11.9 11.9 0 0 0 5.67 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.5-8.42ZM12.14 21.76h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.46 4.45-9.91 9.92-9.91a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>';
  const POPUP_DELAY_MS = 5000;

  function addWhatsAppWidget() {
    if (!document.body || document.getElementById("tpipayWhatsAppWidget")) return;

    const widget = document.createElement("aside");
    widget.className = "tpipay-wa-widget";
    widget.id = "tpipayWhatsAppWidget";
    widget.setAttribute("aria-label", "TPIPAY WhatsApp support");
    widget.innerHTML = `
      <div class="tpipay-wa-card" id="tpipayWhatsAppCard">
        <button class="tpipay-wa-close" type="button" aria-label="Close WhatsApp support message">&times;</button>
        <a class="tpipay-wa-card-link" href="${SUPPORT_URL}" target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp chat with TPIPAY support">
          <div class="tpipay-wa-heading">
            <img src="image/icon and logo/tpipay_logo_white.png" alt="TPIPAY Logo" class="tpipay-wa-logo" />
            <span>
              <span class="tpipay-wa-title">TPIPAY Support</span>
              <span class="tpipay-wa-status">Online · Reply instantly</span>
            </span>
          </div>
          <p class="tpipay-wa-message">Thanks for visiting us. How can we help you today? Tap here to chat with our support team.</p>
        </a>
      </div>
      <a class="tpipay-wa-button" href="${SUPPORT_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat with TPIPAY support on WhatsApp">${ICON}</a>
    `;

    const closeButton = widget.querySelector(".tpipay-wa-close");
    const card = widget.querySelector(".tpipay-wa-card");
    closeButton.addEventListener("click", () => {
      card.hidden = true;
    });
    document.body.append(widget);

    const popup = document.createElement("div");
    popup.className = "tpipay-wa-popup";
    popup.id = "tpipayWhatsAppPopup";
    popup.hidden = true;
    popup.innerHTML = `
      <div class="tpipay-wa-popup-backdrop"></div>
      <section class="tpipay-wa-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="tpipayWhatsAppPopupTitle" aria-describedby="tpipayWhatsAppPopupDescription" tabindex="-1">
        <button class="tpipay-wa-popup-close" type="button" aria-label="Close WhatsApp support popup">&times;</button>
        <span class="tpipay-wa-popup-icon">${ICON}</span>
        <h2 class="tpipay-wa-popup-title" id="tpipayWhatsAppPopupTitle">Chat with Support</h2>
        <p class="tpipay-wa-popup-description" id="tpipayWhatsAppPopupDescription">Have any questions or need help? Chat with our team live on WhatsApp!</p>
        <a class="tpipay-wa-popup-cta" href="${SUPPORT_URL}" target="_blank" rel="noopener noreferrer">${ICON}<span>Contact Us on WhatsApp</span></a>
      </section>
    `;
    document.body.append(popup);

    const dismissPopup = () => {
      popup.hidden = true;
      document.documentElement.classList.remove("tpipay-wa-popup-open");
    };
    popup.querySelector(".tpipay-wa-popup-close").addEventListener("click", dismissPopup);
    popup.querySelector(".tpipay-wa-popup-backdrop").addEventListener("click", dismissPopup);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !popup.hidden) dismissPopup();
    });

    window.setTimeout(() => {
      popup.hidden = false;
      document.documentElement.classList.add("tpipay-wa-popup-open");
      popup.querySelector(".tpipay-wa-popup-close").focus();
    }, POPUP_DELAY_MS);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addWhatsAppWidget, { once: true });
  } else {
    addWhatsAppWidget();
  }
})();
