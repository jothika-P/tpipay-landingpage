const STORE_KEY = "tpipay_store_config_v1";
const CART_KEY = "tpipay_cart_v1";
const ORDER_KEY = "tpipay_last_order_v1";
const GST_RATE = 0.18;
const ORDER_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycby4JKnEWfbuZ6iRZR72emIj7pO99qUiVfVP9wO3yPRg4uC9fr7x31NlTos_T6mgjwVWSw/exec";

const defaultProducts = [
  { id: "sound-box", name: "Sound Box", price: 1999, bulkPrice: null, bulkFrom: null, minQty: 1, image: "image/product/soundbox qr.png" },
  { id: "qr-standee", name: "QR Standee", price: 299, bulkPrice: null, bulkFrom: null, minQty: 1, image: "image/product/qr standee.png" },
  { id: "pos-machine", name: "POS Machine", price: 7500, bulkPrice: 6900, bulkFrom: 10, minQty: 1, image: "image/product/Gemini_Generated_Image_ko2koyko2koyko2k-removebg-preview.png" },
  { id: "prepaid-card", name: "Prepaid Card", price: 95, bulkPrice: 95, bulkFrom: 5000, minQty: 5000, image: "image/product/prpaid card.png" },
  { id: "matm-machine", name: "mATM Machine", price: 3200, bulkPrice: 2900, bulkFrom: 100, minQty: 100, image: "image/product/Gemini_Generated_Image_38p0g438p0g438p0-removebg-preview.png" }
];

const homeData = {
  hero: {
    eyebrow: "TPIPAY FINANCIAL TECHNOLOGY",
    title: "Elevate Your Financial Future With TPIPAY",
    description: "Empowering digital payments with speed, security, and seamless innovation.",
    ctaPrimary: { label: "Partner Login", href: "https://banking.mytpipay.com/login" },
    ctaSecondary: { label: "Become Partner", href: "https://banking.mytpipay.com/sign-up" }
  },
  partners: {
    title: "Our Banking & Payment Network",
    logos: [
      { image: "image/bank image/CASHFREE.png", alt: "Cashfree" },
      { image: "image/bank image/Eko.png", alt: "Eko" },
      { image: "image/bank image/instantpay.png", alt: "InstantPay" },
      { image: "image/bank image/ISERVEU-MAIN-LOGO.png", alt: "IserveU" },
      { image: "image/bank image/Logo-nsdl.png", alt: "NSDL Payments Bank" },
      { image: "image/bank image/paysprint.png", alt: "Paysprint" },
      { image: "image/bank image/PAYU.png", alt: "PayU" },
      { image: "image/bank image/SabPaisa-logo.png", alt: "SabPaisa" },
      { image: "image/bank image/razor.png", alt: "Razorpay" }
    ]
  },
  mission: {
    subtitle: "OUR MISSION",
    title: "Empowering Your Financial Freedom",
    description: "We're dedicated to providing innovative financial solutions that help individuals and businesses achieve their goals through technology-driven approaches and personalized service.",
    image: "image/big banner/Untitled design (1).png",
    features: [
      "Awarded customer support",
      "Features made for you",
      "Trusted by 13,000+ customers"
    ]
  },
  services: {
    title: "Empowering You with Trusted Banking Services",
    description: "We bring together technology, security, and customer care to redefine modern banking.",
    cards: [
      {
        title: "Prepaid Card API",
        description: "Issue and manage virtual/physical prepaid cards for salary, rewards, vendor payments, and corporate expenses.",
        image: "image/big banner/Tpipay Card.png",
        href: "prepaid-card-api.html"
      },
      {
        title: "Prepaid Services",
        description: "Wallet load, card load, card-to-bank transfer, real-time balance check, transaction history, and KYC integration.",
        icon: "image/serviceimage/credit-card-2--deposit-payment-finance-atm-withdraw-atm.svg",
        image: "image/serviceimage/prepaid service-optimized.png",
        href: "prepaid-services.html"
      },
      {
        title: "Connected Banking Payout API",
        description: "Instant bank transfer (IMPS/NEFT/RTGS) to any beneficiary account with real-time status and auto reconciliation.",
        icon: "image/serviceimage/digital pay.png",
        image: "image/serviceimage/bank collection-optimized.png",
        href: "connected-banking-payout.html"
      },
    ]
  },
  products: {
    title: "Products Built For Merchants",
    description: "Hardware and onboarding kits designed for fast collections and easy setup.",
    items: [
      { name: "Sound Box", image: "image/product/soundbox qr.png", path: "products.html#productGrid" },
      { name: "QR Standee", image: "image/product/qr standee.png", path: "products.html#productGrid" },
      { name: "POS Machine", image: "image/product/Gemini_Generated_Image_ko2koyko2koyko2k-removebg-preview.png", path: "products.html#productGrid" },
      { name: "Prepaid Card", image: "image/product/prpaid card.png", path: "products.html#productGrid" },
      { name: "mATM Machine", image: "image/product/Gemini_Generated_Image_38p0g438p0g438p0-removebg-preview.png", path: "products.html#productGrid" }
    ]
  },

  exclusive: {
    title: "Our Exclusive Features",
    description: "Our approach blends deep industry insight, extensive experience, and strategic thinking to solve complex challenges, innovation, and deliver measurable, lasting business value.",
    image: "image/big banner/exclusive.jpg",
    chart: { title: "New payment", value: "50 Lakh" }
  },
  stats: [
    { value: "13000+", label: "Merchants", countTo: 13000, suffix: "+" },
    { value: "2+", label: "Years Experience", countTo: 2, suffix: "+" },
    { value: "2024", label: "Founded", countTo: 2024 },
    { value: "24/7", label: "Support", countTo: 24, suffix: "/7" }
  ],
  mobileApp: {
    subtitle: "OUR MOBILE APP",
    title: "One App For Payments, Collection And Business Growth",
    description: "Accept payments, track transactions, and manage your merchant operations directly from the TPIPAY app with a seamless experience.",
    image: "image/big banner/app image.png"
  },
  faq: [
    {
      question: "What payment services does TPIPAY provide for merchants?",
      answer: "TPIPAY supports UPI collection, API-based payment collection, payout workflows, prepaid card support, and soundbox-enabled merchant payment confirmations."
    },
    {
      question: "How fast can I start accepting UPI and API collections?",
      answer: "Most partners can begin within a short onboarding window after KYC and integration setup. Our team helps with API keys, webhook setup, and test-to-live activation."
    },
    {
      question: "Does TPIPAY support prepaid cards and soundbox solutions?",
      answer: "Yes. TPIPAY provides prepaid card-related APIs and merchant soundbox solutions for instant payment status alerts at the point of collection."
    },
    {
      question: "Can MSMEs and startups manage collections from one dashboard?",
      answer: "Yes. You can monitor transactions, settlements, service performance, and merchant-level activity from a centralized operational dashboard."
    },
    {
      question: "How do I contact TPIPAY support for onboarding help?",
      answer: "You can reach support through the website contact section, registered support email, or phone. The onboarding team assists with setup, documentation, and go-live checks."
    },
    {
      question: "Is TPIPAY suitable for high-volume payout and collection workflows?",
      answer: "Yes. The platform is designed for scalable transaction handling and can support high-frequency merchant collection and payout use cases."
    },
    {
      question: "Can I integrate TPIPAY with my existing business software?",
      answer: "Yes. TPIPAY APIs can be integrated with existing ERP, billing, and custom business systems through standard REST-based integration patterns."
    },
    {
      question: "Do you provide onboarding help for new partners and teams?",
      answer: "Yes. We provide technical and operational onboarding guidance, including account setup, API configuration, and workflow alignment for your team."
    }
  ],
  value: {
    subtitle: "OUR VALUE",
    title: "Save Time And Money With Our Powerful Tools.",
    description: "We help businesses navigate complexity unlock to growth achieve lasting transformation.",
    image: "image/big banner/exclusive banner 1.png",
    points: [
      "Dive into your financial analytics with us",
      "Get timely notifications for upcoming bills",
      "Define your aspirations goal setting features"
    ]
  },
  registration: {
    title: "Company Registration & Certifications",
    cards: [
      { title: "Registration Number", value: "U62099OD2024PTC045666", icon: "image/icon and logo/company icon.svg" },
      { title: "ISO Certified", value: "ISO 9001:2015", icon: "image/icon and logo/iso certifief icon.svg" }
    ],
    poweredBy: "Powered By YES BANK"
  },
  benefits: {
    title: "Benefits of Choosing <span>Tpi</span><span class=\"muted\">Pay</span>",
    description: "We're not just a security provider - we're your trusted protection partner. When you choose TpiPay, you're choosing innovation, security, and reliability.",
    items: [
      { title: "UPI Collection API", description: "Collect UPI payments with real-time confirmation." },
      { title: "SoundBox Solutions", description: "Enable instant voice alerts for successful payments." },
      { title: "Prepaid Card API", description: "Issue and manage prepaid cards for salary." }
    ]
  },
  about: {
    title: "About Tpipay",
    firstParagraph: "Tpipay Financial Technology Private Limited is a forward-thinking company specializing in financial software development and API integration. We empower financial institutions with secure, scalable, and compliant digital solutions.",
    secondParagraph: "Our mission is to simplify complex banking operations through automation and innovation, helping small finance banks, NBFCs, cooperative societies, and fintech startups transform their digital infrastructure.",
    stats: [
      { value: "50+", label: "Financial Institutions" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "10M+", label: "Transactions Monthly" },
      { value: "24/7", label: "Support Available" }
    ],
    highlights: [
      { title: "Our Mission", description: "To revolutionize financial operations with innovative, secure, and scalable software solutions." },
      { title: "Our Vision", description: "To become India's most trusted partner in financial technology transformation." },
      { title: "Our Values", description: "Trust, innovation, compliance, and customer-centric excellence in everything we do." },
      { title: "Company Registration", description: "U62099OD2024PTC045666" },
      { title: "Licenses & Certifications", description: "ISO 9001:2015 Certified" }
    ]
  },
};

function readConfig() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return defaultProducts;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length) {
      return defaultProducts.map((base) => {
        const saved = parsed.find((p) => p.id === base.id);
        return saved ? { ...base, ...saved, image: base.image } : base;
      });
    }
  } catch (_) {}
  return defaultProducts;
}

function readCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  setCartCount();
}

function saveConfig(config) {
  localStorage.setItem(STORE_KEY, JSON.stringify(config));
}

function getProduct(productId) {
  return readConfig().find((p) => p.id === productId);
}

function unitPrice(product, qty) {
  if (product.bulkPrice && product.bulkFrom && qty >= Number(product.bulkFrom)) {
    return Number(product.bulkPrice);
  }
  return Number(product.price);
}

function formatINR(amount) {
  return `Rs ${Number(amount).toLocaleString("en-IN")}`;
}

let toastTimer = null;
function showToast(message, variant = "success") {
  if (!message) return;
  let toast = document.querySelector(".site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "site-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.toggle("error", variant === "error");
  toast.classList.add("show");

  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function setCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const totalItems = readCart().reduce((sum, item) => sum + Number(item.qty || 0), 0);
  el.textContent = String(totalItems);
}

function addToCart(productId, qty) {
  const product = getProduct(productId);
  if (!product) return { ok: false, message: "Product not found." };
  const safeQty = Number(qty || 0);
  if (!Number.isFinite(safeQty) || safeQty < 1) return { ok: false, message: "Enter a valid quantity." };
  if (safeQty < Number(product.minQty || 1)) {
    return { ok: false, message: `Minimum quantity for ${product.name} is ${product.minQty}.` };
  }

  const cart = readCart();
  const index = cart.findIndex((item) => item.id === productId);
  if (index >= 0) {
    const nextQty = Number(cart[index].qty) + safeQty;
    if (nextQty < Number(product.minQty || 1)) {
      return { ok: false, message: `Minimum quantity for ${product.name} is ${product.minQty}.` };
    }
    cart[index].qty = nextQty;
  } else {
    cart.push({ id: product.id, qty: safeQty });
  }
  saveCart(cart);
  return { ok: true, message: "Product added to cart." };
}

function cartWithPricing() {
  return readCart().map((item) => {
    const product = getProduct(item.id);
    if (!product) return null;
    const price = unitPrice(product, Number(item.qty));
    return {
      id: product.id,
      name: product.name,
      image: product.image || "",
      qty: Number(item.qty),
      unitPrice: price,
      lineTotal: price * Number(item.qty),
      minQty: Number(product.minQty || 1)
    };
  }).filter(Boolean);
}

function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.lineTotal, 0);
}

function checkoutTotals(items) {
  const subTotal = cartTotal(items);
  const gstTotal = Number((subTotal * GST_RATE).toFixed(2));
  const grandTotal = Number((subTotal + gstTotal).toFixed(2));
  return { subTotal, gstTotal, grandTotal };
}

function itemWithGst(item) {
  const gst = Number((item.lineTotal * GST_RATE).toFixed(2));
  const totalWithGst = Number((item.lineTotal + gst).toFixed(2));
  return { ...item, gst, totalWithGst };
}

function bindProductCards() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-product-id");
      const qtyInput = document.querySelector(`input[data-qty-for="${id}"]`);
      const qty = qtyInput ? Number(qtyInput.value) : 1;
      const result = addToCart(id, qty);
      showToast(result.message, result.ok ? "success" : "error");
    });
  });
}

function bindQtySteppers() {
  const controls = document.querySelectorAll(".qty-control");
  if (!controls.length) return;
  controls.forEach((control) => {
    const input = control.querySelector("input[type='number']");
    const minus = control.querySelector(".qty-minus");
    const plus = control.querySelector(".qty-plus");
    if (!input || !minus || !plus) return;

    const min = Number(input.min || 1);
    const step = Number(input.step || 1);

    minus.addEventListener("click", () => {
      const current = Number(input.value || min);
      input.value = Math.max(min, current - step);
    });

    plus.addEventListener("click", () => {
      const current = Number(input.value || min);
      input.value = current + step;
    });
  });
}

function renderCartTable() {
  const tableBody = document.getElementById("cartRows");
  const totalEl = document.getElementById("cartGrandTotal");
  if (!tableBody || !totalEl) return;

  const items = cartWithPricing();
  if (!items.length) {
    tableBody.innerHTML = `<tr><td colspan="5">Your cart is empty.</td></tr>`;
    totalEl.textContent = formatINR(0);
    return;
  }

  tableBody.innerHTML = items.map((item) => `
    <tr>
      <td>
        <div class="cart-product-cell">
          <img src="${item.image}" alt="${item.name}" class="cart-product-thumb">
          <span>${item.name}</span>
        </div>
      </td>
      <td>${formatINR(item.unitPrice)}</td>
      <td><input type="number" min="${item.minQty}" data-item-id="${item.id}" value="${item.qty}" class="qty-input"></td>
      <td>${formatINR(item.lineTotal)}</td>
      <td class="table-actions">
        <button class="primary-btn small-btn" data-action="update" data-item-id="${item.id}">Update</button>
        <button class="danger-btn" data-action="remove" data-item-id="${item.id}">Remove</button>
      </td>
    </tr>
  `).join("");
  totalEl.textContent = formatINR(cartTotal(items));

  tableBody.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      const id = btn.getAttribute("data-item-id");
      const cart = readCart();
      const product = getProduct(id);
      const idx = cart.findIndex((item) => item.id === id);
      if (idx < 0) return;

      if (action === "remove") {
        cart.splice(idx, 1);
      } else {
        const qtyInput = tableBody.querySelector(`input[data-item-id="${id}"]`);
        const nextQty = Number(qtyInput ? qtyInput.value : cart[idx].qty);
        if (nextQty < Number(product.minQty || 1)) {
          return;
        }
        cart[idx].qty = nextQty;
      }
      saveCart(cart);
      renderCartTable();
    });
  });
}

function renderCheckoutSummary() {
  const wrap = document.getElementById("checkoutSummary");
  const totalEl = document.getElementById("checkoutTotal");
  const subTotalEl = document.getElementById("checkoutSubTotal");
  const gstEl = document.getElementById("checkoutGstTotal");
  if (!wrap || !totalEl) return;
  const items = cartWithPricing();
  if (!items.length) {
    wrap.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = formatINR(0);
    if (subTotalEl) subTotalEl.textContent = formatINR(0);
    if (gstEl) gstEl.textContent = formatINR(0);
    const payBtn = document.getElementById("payNowBtn");
    if (payBtn) payBtn.disabled = true;
    return;
  }
  const summaryItems = items.map(itemWithGst);
  wrap.innerHTML = summaryItems.map((item) => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}" class="checkout-thumb">
      <p>
        ${item.name} x ${item.qty}<br>
        <small>Base: ${formatINR(item.lineTotal)} | GST: ${formatINR(item.gst)}</small><br>
        <strong>${formatINR(item.totalWithGst)}</strong>
      </p>
    </div>
  `).join("");
  const totals = checkoutTotals(items);
  if (subTotalEl) subTotalEl.textContent = formatINR(totals.subTotal);
  if (gstEl) gstEl.textContent = formatINR(totals.gstTotal);
  totalEl.textContent = formatINR(totals.grandTotal);
}

async function pushOrderToGoogleSheet(order) {
  if (!ORDER_SHEET_WEBHOOK_URL) return;

  const itemsSummary = order.items.map((item) => `${item.name} x ${item.qty}`).join(", ");
  const itemsJson = JSON.stringify(order.items.map((item) => ({
    id: item.id,
    name: item.name,
    qty: item.qty,
    unitPrice: item.unitPrice,
    lineTotal: item.lineTotal,
    gst: item.gst,
    totalWithGst: item.totalWithGst
  })));

  const sheetPayload = {
    type: "order",
    orderId: order.id,
    createdAt: order.createdAt,
    name: order.customer.name,
    mobile: order.customer.mobile,
    email: order.customer.email,
    address: order.customer.address,
    customerGst: order.customer.gst || "",
    paymentMethod: order.paymentMethod,
    items: itemsSummary,
    itemsJson,
    itemCount: order.items.reduce((sum, item) => sum + Number(item.qty || 0), 0),
    subtotal: order.totals.subTotal,
    gstAmount: order.totals.gstTotal,
    total: order.totals.grandTotal,
    status: order.status
  };

  const formData = new FormData();
  Object.entries(sheetPayload).forEach(([key, value]) => formData.append(key, String(value)));

  await fetch(ORDER_SHEET_WEBHOOK_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
    keepalive: true
  });
}
async function placeOrder(event) {
  event.preventDefault();

  const form = document.getElementById("checkoutForm");
  const payBtn = document.getElementById("payNowBtn");
  const originalBtnText = payBtn ? payBtn.textContent : "";

  if (payBtn) {
    payBtn.disabled = true;
    payBtn.textContent = "Processing...";
  }

  try {
    const items = cartWithPricing();
    if (!items.length) {
      return;
    }

    const payload = {
      id: `TPI-${Date.now()}`,
      createdAt: new Date().toISOString(),
      customer: {
        name: form.name.value.trim(),
        mobile: form.mobile.value.trim(),
        email: form.email.value.trim(),
        address: form.address.value.trim(),
        gst: form.gst.value.trim()
      },
      paymentMethod: form.gateway.value,
      status: "pending"
    };

    const totals = checkoutTotals(items);
    payload.items = items.map(itemWithGst);
    payload.totals = totals;
    payload.total = totals.grandTotal;

    if (!payload.customer.name || !payload.customer.mobile || !payload.customer.email || !payload.customer.address) {
      return;
    }

    if (!/^\d{10}$/.test(payload.customer.mobile)) {
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.customer.email)) {
      return;
    }

    if (payload.paymentMethod !== "cod") {
      return;
    }

    // Gateway-ready hook for backend payment order creation.
    try {
      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const data = await response.json();
        payload.gatewayOrderId = data.gatewayOrderId || null;
      }
    } catch (_) {}

    payload.status = "confirmed";
    localStorage.setItem(ORDER_KEY, JSON.stringify(payload));
    localStorage.setItem(CART_KEY, JSON.stringify([]));
    setCartCount();

    // Store order details in Google Sheets through Apps Script webhook.
    try {
      await Promise.race([
        pushOrderToGoogleSheet(payload),
        new Promise((resolve) => setTimeout(resolve, 3500))
      ]);
    } catch (_) {}

    // Webhook-ready callback notifier for real-time status update.
    fetch("/api/webhooks/payment-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: payload.id, status: payload.status })
    }).catch(() => {});

    window.location.href = "order-confirmation.html";
  } finally {
    if (payBtn) {
      payBtn.disabled = false;
      payBtn.textContent = originalBtnText || "Pay And Confirm Order";
    }
  }
}
function renderConfirmation() {
  const box = document.getElementById("orderSummaryBox");
  if (!box) return;
  const raw = localStorage.getItem(ORDER_KEY);
  if (!raw) {
    box.innerHTML = `
      <div class="order-confirm-hero">
        <div class="order-confirm-badge">✓</div>
        <h1>No Order Found</h1>
        <p>Please place an order first.</p>
        <a href="products.html" class="order-confirm-btn primary">Go To Products</a>
      </div>
    `;
    return;
  }
  const order = JSON.parse(raw);
  const createdAt = order.createdAt ? new Date(order.createdAt) : new Date();
  const estDelivery = new Date(createdAt.getTime());
  estDelivery.setDate(estDelivery.getDate() + 7);
  const fmtDate = (date) => date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

  box.innerHTML = `
    <div class="order-confirm-hero">
      <div class="order-confirm-badge">✓</div>
      <h1>Thanks for your order!</h1>
      <p>We are preparing your items and will update you soon.</p>
      <a href="products.html" class="order-confirm-btn ghost">Continue Shopping</a>
    </div>

    <div class="order-confirm-panel">
      <div class="order-confirm-panel-head">
        <div>
          <h2>Order ID: ${order.id}</h2>
          <p>Order Date: ${fmtDate(createdAt)} <span class="dot">•</span> Estimated delivery: ${fmtDate(estDelivery)}</p>
        </div>
        <div class="order-confirm-actions">
          <a href="#" class="order-confirm-btn ghost">Download Invoice</a>
          <a href="contact.html" class="order-confirm-btn primary">Track Order</a>
        </div>
      </div>

      <div class="order-confirm-items">
        ${order.items.map((item) => `
          <article class="order-confirm-item">
            <div class="order-confirm-item-main">
              <img src="${item.image}" alt="${item.name}">
              <div>
                <h3>${item.name}</h3>
                <p>Qty: ${item.qty}</p>
              </div>
            </div>
            <div class="order-confirm-item-price">${formatINR(item.totalWithGst || item.lineTotal)}</div>
          </article>
        `).join("")}
      </div>

      <div class="order-confirm-footer">
        <div>
          <span class="label">Payment method</span>
          <p>${order.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
        </div>
        <div>
          <span class="label">Address</span>
          <p>${order.customer.name}<br>${order.customer.address}</p>
        </div>
        <div>
          <span class="label">Support</span>
          <p>24/7 assistance<br>+91 9040888400</p>
        </div>
      </div>
    </div>
  `;
}

function renderAdminProducts() {
  const table = document.getElementById("adminProductsRows");
  if (!table) return;
  const products = readConfig();
  table.innerHTML = products.map((p) => `
    <tr>
      <td>${p.name}</td>
      <td>${formatINR(p.price)}</td>
      <td>${p.bulkPrice ? formatINR(p.bulkPrice) : "-"}</td>
      <td>${p.bulkFrom || "-"}</td>
      <td>${p.minQty}</td>
    </tr>
  `).join("");
}

function bindAdminForm() {
  const form = document.getElementById("adminProductForm");
  if (!form) return;
  const selector = document.getElementById("productSelector");
  const price = document.getElementById("adminPrice");
  const bulkPrice = document.getElementById("adminBulkPrice");
  const bulkFrom = document.getElementById("adminBulkFrom");
  const minQty = document.getElementById("adminMinQty");

  function loadProduct(id) {
    const product = getProduct(id);
    if (!product) return;
    price.value = product.price;
    bulkPrice.value = product.bulkPrice || "";
    bulkFrom.value = product.bulkFrom || "";
    minQty.value = product.minQty || 1;
  }

  selector.addEventListener("change", () => loadProduct(selector.value));
  loadProduct(selector.value);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const config = readConfig();
    const idx = config.findIndex((p) => p.id === selector.value);
    if (idx < 0) return;
    config[idx].price = Number(price.value);
    config[idx].bulkPrice = bulkPrice.value ? Number(bulkPrice.value) : null;
    config[idx].bulkFrom = bulkFrom.value ? Number(bulkFrom.value) : null;
    config[idx].minQty = Number(minQty.value);
    saveConfig(config);
    renderAdminProducts();
  });
}

function renderBulkHomePage() {
  const heroTitle = document.getElementById("bulkHeroTitle");
  if (!heroTitle) return;

  const heroEyebrow = document.getElementById("bulkHeroEyebrow");
  const heroDescription = document.getElementById("bulkHeroDescription");
  const heroPrimary = document.getElementById("heroPrimaryBtn");
  const heroSecondary = document.getElementById("heroSecondaryBtn");
  const partnerTitle = document.getElementById("partnersTitle");
  const partnerTrack = document.getElementById("partnersTrack");
  const missionSubtitle = document.getElementById("missionSubtitle");
  const missionTitle = document.getElementById("missionTitle");
  const missionDescription = document.getElementById("missionDescription");
  const missionFeatures = document.getElementById("missionFeatures");
  const missionImage = document.getElementById("missionImage");
  const servicesTitle = document.getElementById("servicesTitle");
  const servicesDescription = document.getElementById("servicesDescription");
  const serviceGrid = document.getElementById("serviceGrid");
  const productsTitle = document.getElementById("productsTitle");
  const productsDescription = document.getElementById("productsDescription");
  const productGrid = document.getElementById("productGrid");
  const exclusiveTitle = document.getElementById("exclusiveTitle");
  const exclusiveDescription = document.getElementById("exclusiveDescription");
  const exclusiveImage = document.getElementById("exclusiveImage");
  const exclusiveChartTitle = document.getElementById("exclusiveChartTitle");
  const exclusiveChartValue = document.getElementById("exclusiveChartValue");
  const statsWrap = document.getElementById("bulkStats");
  const valueSubtitle = document.getElementById("valueSubtitle");
  const appSubtitle = document.getElementById("appSubtitle");
  const appTitle = document.getElementById("appTitle");
  const appDescription = document.getElementById("appDescription");
  const appImage = document.getElementById("appImage");
  const faqModernList = document.getElementById("faqModernList");
  const valueTitle = document.getElementById("valueTitle");
  const valueDescription = document.getElementById("valueDescription");
  const valuePoints = document.getElementById("valuePoints");
  const valueImage = document.getElementById("valueImage");
  const registrationTitle = document.getElementById("registrationTitle");
  const registrationCards = document.getElementById("registrationCards");
  const poweredBy = document.getElementById("poweredBy");
  const benefitsTitle = document.getElementById("benefitsTitle");
  const benefitsDescription = document.getElementById("benefitsDescription");
  const benefitsList = document.getElementById("benefitsList");
  const aboutTitle = document.getElementById("aboutTitle");
  const aboutTextOne = document.getElementById("aboutTextOne");
  const aboutTextTwo = document.getElementById("aboutTextTwo");
  const aboutStats = document.getElementById("aboutStats");
  const aboutHighlights = document.getElementById("aboutHighlights");
  const contactCards = document.getElementById("contactPreviewCards");

  if (heroEyebrow) heroEyebrow.textContent = homeData.hero.eyebrow;
  if (heroTitle) heroTitle.textContent = homeData.hero.title;
  if (heroDescription) heroDescription.textContent = homeData.hero.description;
  if (heroPrimary) {
    heroPrimary.textContent = homeData.hero.ctaPrimary.label;
    heroPrimary.setAttribute("href", homeData.hero.ctaPrimary.href);
    heroPrimary.setAttribute("target", "_blank");
  }
  if (heroSecondary) {
    heroSecondary.textContent = homeData.hero.ctaSecondary.label;
    heroSecondary.setAttribute("href", homeData.hero.ctaSecondary.href);
    heroSecondary.setAttribute("target", "_blank");
  }

  if (partnerTitle) partnerTitle.textContent = homeData.partners.title;
  if (partnerTrack) {
    const repeatedLogos = [...homeData.partners.logos, ...homeData.partners.logos];
    partnerTrack.innerHTML = repeatedLogos.map((logo) => `
      <article class="partner-logo-item">
        <img src="${logo.image}" alt="${logo.alt}">
      </article>
    `).join("");
  }

  if (missionSubtitle) missionSubtitle.textContent = homeData.mission.subtitle;
  if (missionTitle) missionTitle.textContent = homeData.mission.title;
  if (missionDescription) missionDescription.textContent = homeData.mission.description;
  if (missionImage) missionImage.setAttribute("src", homeData.mission.image);
  if (missionFeatures) {
    missionFeatures.innerHTML = homeData.mission.features.map((point) => `
      <li><span class="tick-bullet">✓</span>${point}</li>
    `).join("");
  }

  if (servicesTitle) servicesTitle.textContent = homeData.services.title;
  if (servicesDescription) servicesDescription.textContent = homeData.services.description;
  if (serviceGrid) {
    serviceGrid.innerHTML = homeData.services.cards.map((card, index) => {
      const imageSource = card.image
        || (homeData.products.items[index] && homeData.products.items[index].image)
        || homeData.mobileApp.image;
      const link = card.href || "service.html";
      return `
      <article class="service-showcase-row reveal-on-scroll">
        <div class="service-showcase-media">
          <div class="service-browser-mock">
            <div class="service-browser-top">
              <span></span><span></span><span></span>
            </div>
            <div class="service-browser-body">
              <img src="${imageSource}" alt="${card.title}" loading="lazy" decoding="async" fetchpriority="low">
            </div>
          </div>
        </div>
        <div class="service-showcase-copy">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <ul class="service-points">
            <li><span class="point-check">✓</span>${homeData.mission.features[index % homeData.mission.features.length]}</li>
            <li><span class="point-check">✓</span>${homeData.value.points[index % homeData.value.points.length]}</li>
            <li><span class="point-check">✓</span>${homeData.benefits.items[index % homeData.benefits.items.length].description}</li>
          </ul>
          <a href="${link}" class="primary-btn">View Details</a>
        </div>
      </article>
    `;
    }).join("");
  }

  if (productsTitle) productsTitle.textContent = homeData.products.title;
  if (productsDescription) productsDescription.textContent = homeData.products.description;
  if (productGrid) {
    productGrid.innerHTML = homeData.products.items.slice(0, 3).map((product) => `
      <article class="bulk-card product-card reveal-on-scroll">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <a href="${product.path}" class="secondary-btn">View Product</a>
      </article>
    `).join("");
  }

  if (exclusiveTitle) exclusiveTitle.textContent = homeData.exclusive.title;
  if (exclusiveDescription) exclusiveDescription.textContent = homeData.exclusive.description;
  if (exclusiveImage) exclusiveImage.setAttribute("src", homeData.exclusive.image);
  if (exclusiveChartTitle) exclusiveChartTitle.textContent = homeData.exclusive.chart.title;
  if (exclusiveChartValue) exclusiveChartValue.textContent = homeData.exclusive.chart.value;

  if (statsWrap) {
    statsWrap.innerHTML = homeData.stats.map((item) => `
      <article class="stat-card">
        <div class="stat-value"
             data-count-to="${Number(item.countTo ?? 0)}"
             data-prefix="${item.prefix ?? ""}"
             data-suffix="${item.suffix ?? ""}">0</div>
        <div class="stat-label">${item.label}</div>
      </article>
    `).join("");
    bindStatsCounter(statsWrap);
  }

  if (appSubtitle) appSubtitle.textContent = homeData.mobileApp.subtitle;
  if (appTitle) appTitle.textContent = homeData.mobileApp.title;
  if (appDescription) appDescription.textContent = homeData.mobileApp.description;
  if (appImage) appImage.setAttribute("src", homeData.mobileApp.image);
  if (faqModernList) {
    faqModernList.innerHTML = homeData.faq.map((item, index) => {
      const question = typeof item === "string" ? item : item.question;
      const answer = typeof item === "string"
        ? "Please contact TPIPAY support for detailed guidance on this question."
        : item.answer;
      return `
      <article class="faq-modern-item reveal-on-scroll anim-top">
        <button type="button" class="faq-modern-question" aria-expanded="${index === 0 ? "true" : "false"}">
          <p>${question}</p>
          <span>+</span>
        </button>
        <div class="faq-modern-answer" ${index === 0 ? "" : "hidden"}>
          <p>${answer}</p>
        </div>
      </article>
    `;
    }).join("");
    bindFaqAccordion();
  }

  if (valueSubtitle) valueSubtitle.textContent = homeData.value.subtitle;
  if (valueTitle) valueTitle.textContent = homeData.value.title;
  if (valueDescription) valueDescription.textContent = homeData.value.description;
  if (valueImage) valueImage.setAttribute("src", homeData.value.image);
  if (valuePoints) {
    valuePoints.innerHTML = homeData.value.points.map((point) => `
      <li><span class="tick-bullet">✓</span>${point}</li>
    `).join("");
  }

  if (registrationTitle) registrationTitle.textContent = homeData.registration.title;
  if (registrationCards) {
    registrationCards.innerHTML = homeData.registration.cards.map((item) => `
      <article class="bulk-card cert-card reveal-on-scroll">
        <img src="${item.icon}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.value}</p>
      </article>
    `).join("");
  }
  if (poweredBy) poweredBy.textContent = homeData.registration.poweredBy;

  if (benefitsTitle) benefitsTitle.innerHTML = homeData.benefits.title;
  if (benefitsDescription) benefitsDescription.textContent = homeData.benefits.description;
  if (benefitsList) {
    benefitsList.innerHTML = homeData.benefits.items.map((item) => `
      <article>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </article>
    `).join("");
  }

  if (aboutTitle) aboutTitle.textContent = homeData.about.title;
  if (aboutTextOne) aboutTextOne.textContent = homeData.about.firstParagraph;
  if (aboutTextTwo) aboutTextTwo.textContent = homeData.about.secondParagraph;
  if (aboutStats) {
    aboutStats.innerHTML = homeData.about.stats.map((item) => `
      <article class="about-stat">
        <div class="about-stat-value">${item.value}</div>
        <div class="about-stat-label">${item.label}</div>
      </article>
    `).join("");
  }
  if (aboutHighlights) {
    aboutHighlights.innerHTML = homeData.about.highlights.map((item) => `
      <article class="about-highlight">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </article>
    `).join("");
  }

  if (contactCards) {
    contactCards.innerHTML = homeData.contactCards.map((item) => `
      <article class="bulk-card">
        <div class="card-badge">${item.title.charAt(0)}</div>
        <h3>${item.title}</h3>
        <p>${item.body.replace(/\n/g, "<br>")}</p>
      </article>
    `).join("");
  }

  const leftTextSelectors = [
    ".bulk-section-head h2",
    ".text-panel h2",
    ".benefits-text h3",
    ".benefits-list h4",
    ".about-highlight h4"
  ];
  const topTextSelectors = [
    ".bulk-section-head p",
    ".text-panel p",
    ".benefits-text p",
    ".benefits-list p",
    ".about-highlight p"
  ];
  const rightVisualSelectors = [
    ".bulk-hero-visual",
    ".image-panel",
    ".product-card",
    ".service-icon",
    ".partner-logo-item",
    ".app-panel"
  ];
  const globalRevealSelectors = [
    ".bulk-section > *",
    ".bulk-hero > *",
    ".bulk-stats > *",
    ".service-showcase-row",
    ".service-showcase-row > *",
    ".app-modern-card > *",
    ".faq-modern > *",
    ".faq-modern-item",
    ".bulk-about-layout > *",
    "#contactPreviewCards > *"
  ];

  document.querySelectorAll(leftTextSelectors.join(",")).forEach((el) => {
    el.classList.add("reveal-on-scroll", "anim-left");
  });
  document.querySelectorAll(topTextSelectors.join(",")).forEach((el) => {
    el.classList.add("reveal-on-scroll", "anim-top");
  });
  document.querySelectorAll(rightVisualSelectors.join(",")).forEach((el) => {
    el.classList.add("reveal-on-scroll", "anim-right");
  });
  document.querySelectorAll(globalRevealSelectors.join(",")).forEach((el) => {
    if (!el.classList.contains("reveal-on-scroll")) {
      el.classList.add("reveal-on-scroll", "anim-top");
    }
  });

  const revealTargets = document.querySelectorAll(".reveal-on-scroll");
  revealTargets.forEach((el, index) => {
    el.style.setProperty("--reveal-delay", `${(index % 8) * 60}ms`);
  });
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });
  revealTargets.forEach((el) => revealObserver.observe(el));

  const benefitCards = document.querySelectorAll(".connection-card");
  benefitCards.forEach((card) => card.classList.add("animate"));
}

function bindFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-modern-item");
  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector(".faq-modern-question");
    const answer = item.querySelector(".faq-modern-answer");
    if (!questionBtn || !answer) return;

    const setOpen = (open) => {
      item.classList.toggle("is-open", open);
      questionBtn.setAttribute("aria-expanded", open ? "true" : "false");
      answer.hidden = !open;
    };

    setOpen(index === 0);
    questionBtn.addEventListener("click", () => {
      const next = !item.classList.contains("is-open");
      setOpen(next);
    });
  });
}

function bindStatsCounter(statsWrap) {
  const counters = Array.from(statsWrap.querySelectorAll(".stat-value[data-count-to]"));
  if (!counters.length) return;
  let isAnimating = false;
  let canReplay = true;

  const formatNumber = (num, target) => {
    if (target >= 10000) return Math.floor(num).toLocaleString("en-IN");
    return String(Math.floor(num));
  };
  const setCounterValue = (el, num) => {
    const target = Number(el.dataset.countTo || 0);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    el.textContent = `${prefix}${formatNumber(num, target)}${suffix}`;
  };

  const animateCounters = () => {
    if (isAnimating || !canReplay) return;
    isAnimating = true;
    canReplay = false;

    const startTime = performance.now();
    const duration = 2200;

    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      counters.forEach((el) => {
        const target = Number(el.dataset.countTo || 0);
        const current = target * eased;
        setCounterValue(el, current);
      });

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        isAnimating = false;
      }
    };

    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    animateCounters();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      } else {
        canReplay = true;
        counters.forEach((el) => setCounterValue(el, 0));
      }
    });
  }, { threshold: 0.35 });

  observer.observe(statsWrap);
}

function bindAppPhonesScrollBehavior() {
  const appPhones = document.querySelector(".app-modern-phones");
  if (!appPhones) return;

  appPhones.classList.add("phones-overlap");
  appPhones.classList.remove("phones-apart");

  let lastScrollY = window.scrollY || 0;
  let ticking = false;

  const inViewport = () => {
    const rect = appPhones.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.1;
  };

  const applyStateByDirection = (deltaY) => {
    if (!inViewport() || deltaY === 0) return;

    if (deltaY > 0) {
      appPhones.classList.add("phones-apart");
      appPhones.classList.remove("phones-overlap");
      return;
    }

    appPhones.classList.add("phones-overlap");
    appPhones.classList.remove("phones-apart");
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY || 0;
      const deltaY = currentY - lastScrollY;
      lastScrollY = currentY;
      applyStateByDirection(deltaY);
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const opened = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", opened ? "true" : "false");
    });
  }

  setCartCount();
  bindQtySteppers();
  bindProductCards();
  renderCartTable();
  renderCheckoutSummary();
  renderConfirmation();
  renderAdminProducts();
  bindAdminForm();
  renderBulkHomePage();
  bindAppPhonesScrollBehavior();

  const missionImage = document.getElementById("missionImage");
  if (missionImage) {
    const triggerBounce = () => {
      missionImage.classList.remove("mission-bounce");
      void missionImage.offsetWidth;
      missionImage.classList.add("mission-bounce");
    };
    missionImage.addEventListener("click", triggerBounce);
  }

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) checkoutForm.addEventListener("submit", placeOrder);

  const mobileInput = document.querySelector('#checkoutForm input[name="mobile"]');
  if (mobileInput) {
    mobileInput.addEventListener("input", () => {
      mobileInput.value = mobileInput.value.replace(/\D/g, "").slice(0, 10);
    });
  }
});
