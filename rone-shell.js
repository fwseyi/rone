(function () {
  const headerHost = document.querySelector("[data-rone-header]");
  if (!headerHost) return;

  const current = headerHost.dataset.current || "";
  const currentAttr = (name) => current === name ? ' aria-current="page"' : "";
  const currencyPicker = (modifier = "") => `
    <label class="currency-picker ${modifier}">
      <span class="sr-only">Purchase currency</span>
      <select data-currency-select aria-label="Purchase currency">
        <option value="NGN">NGN &#8358;</option>
        <option value="USD">USD $</option>
      </select>
    </label>`;

  headerHost.innerHTML = `
    <div class="announcement">
      <p>Complimentary delivery on orders over <span data-money-usd="500">$500</span></p>
      <a href="rone-care-v1.html#delivery">Delivery &amp; returns</a>
    </div>
    <header class="site-header" data-site-header>
      <nav class="nav-group" aria-label="Primary navigation">
        <a class="nav-link" href="rone-shop-v1.html" data-nav-preview-trigger="shop" aria-haspopup="true" aria-expanded="false">Shop</a>
        <a class="nav-link" href="rone-collections-v1.html" data-nav-preview-trigger="collections" aria-haspopup="true" aria-expanded="false"${currentAttr("collections")}>Collections</a>
        <a class="nav-link" href="rone-about-v1.html" data-nav-preview-trigger="about" aria-haspopup="true" aria-expanded="false"${currentAttr("about")}>About</a>
      </nav>
      <button class="mobile-control menu-control" type="button" data-menu-open aria-label="Open menu">Menu</button>
      <a class="wordmark" href="index.html" aria-label="Rone home">Rone</a>
      <nav class="nav-group right" aria-label="Utility navigation">
        <a class="nav-action" href="rone-search-v1.html"${currentAttr("search")}>Search</a>
        <a class="nav-link" href="rone-account-v1.html"${currentAttr("account")}>Account</a>
        ${currencyPicker("currency-picker--header")}
        <a class="nav-action" href="rone-shop-v1.html?state=bag">Bag (<span class="bag-count" data-shell-bag-count>0</span>)</a>
      </nav>
      <a class="mobile-control bag-control" href="rone-shop-v1.html?state=bag">Bag (<span class="bag-count" data-shell-bag-count>0</span>)</a>
    </header>
    <div class="nav-preview" data-nav-preview aria-hidden="true" inert>
      <section class="nav-preview-panel" data-nav-preview-panel="shop" aria-label="Shop preview">
        <div class="nav-preview-column nav-preview-lead"><p class="eyebrow">Shop Rone</p><a href="rone-shop-v1.html">Shop all</a><a href="rone-shop-v1.html?sort=newest">New arrivals</a><a href="rone-shop-v1.html?filter=icon">Rone icons</a></div>
        <div class="nav-preview-column"><p class="eyebrow">Departments</p><a href="rone-shop-v1.html?category=Clothing">Clothing</a><a href="rone-shop-v1.html?category=Bags">Bags</a><a href="rone-shop-v1.html?category=Shoes">Shoes</a><a href="rone-shop-v1.html?category=Underwear">Underwear</a><a href="rone-shop-v1.html?category=Accessories">Accessories</a></div>
        <div class="nav-preview-column"><p class="eyebrow">Underwear</p><a href="rone-shop-v1.html?category=Underwear&amp;subcategory=Singlets">Singlets</a><a href="rone-shop-v1.html?category=Underwear&amp;subcategory=Boxers">Boxers</a><a href="rone-shop-v1.html?category=Underwear&amp;subcategory=Pants">Pants</a><a href="rone-shop-v1.html?category=Underwear&amp;subcategory=Swimwear">Swimwear</a><a href="rone-shop-v1.html?category=Underwear&amp;subcategory=Tights">Tights</a></div>
        <figure class="nav-preview-visual"><img src="https://images.pexels.com/photos/3927390/pexels-photo-3927390.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200" alt="Rone clothing and accessories edit"><figcaption><span>The First Assembly</span><span aria-hidden="true">&#8594;</span></figcaption></figure>
      </section>
      <section class="nav-preview-panel" data-nav-preview-panel="collections" aria-label="Collections preview">
        <div class="nav-preview-column nav-preview-lead"><p class="eyebrow">Current chapter</p><a href="rone-collections-v1.html">The First Assembly</a><a href="rone-shop-v1.html?sort=newest">New work</a></div>
        <div class="nav-preview-column"><p class="eyebrow">By wardrobe</p><a href="rone-shop-v1.html?category=Clothing">Quiet tailoring</a><a href="rone-shop-v1.html?category=Bags">Leather forms</a><a href="rone-shop-v1.html?category=Shoes">Soft structure</a></div>
        <div class="nav-preview-column"><p class="eyebrow">Stories</p><a href="rone-collections-v1.html#chapter-one">A daily uniform</a><a href="rone-collections-v1.html#chapter-two">Material studies</a><a href="rone-collections-v1.html#collection-edit">The collection edit</a></div>
        <figure class="nav-preview-visual"><img src="assets/rone-collection-hero.jpg" alt="Rone relaxed tailoring collection"><figcaption><span>Built as a wardrobe</span><span aria-hidden="true">&#8594;</span></figcaption></figure>
      </section>
      <section class="nav-preview-panel" data-nav-preview-panel="about" aria-label="About Rone preview">
        <div class="nav-preview-column nav-preview-lead"><p class="eyebrow">Rone</p><a href="rone-about-v1.html">Our approach</a><a href="rone-about-v1.html#the-house">The house</a></div>
        <div class="nav-preview-column"><p class="eyebrow">Principles</p><a href="rone-about-v1.html#materials">Natural fibres</a><a href="rone-about-v1.html#principles">Limited runs</a><a href="rone-about-v1.html#principles">Repair-minded design</a></div>
        <div class="nav-preview-column"><p class="eyebrow">Explore</p><a href="rone-about-v1.html#making">How we make</a><a href="rone-care-v1.html">Client care</a><a href="rone-account-v1.html">Your account</a></div>
        <figure class="nav-preview-visual"><img src="https://images.pexels.com/photos/6630853/pexels-photo-6630853.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200" alt="Close view of Rone knitwear"><figcaption><span>Material, form, time</span><span aria-hidden="true">&#8594;</span></figcaption></figure>
      </section>
    </div>
    <div class="mobile-menu-layer" data-mobile-menu aria-hidden="true" inert>
      <div class="mobile-menu-head"><span class="wordmark">Rone</span><button type="button" data-menu-close aria-label="Close menu">&times;</button></div>
      <nav class="mobile-menu-nav" aria-label="Mobile navigation">
        <a href="rone-shop-v1.html">Shop <span>01</span></a>
        <a href="rone-collections-v1.html">Collections <span>02</span></a>
        <a href="rone-about-v1.html">About <span>03</span></a>
        <a href="rone-search-v1.html">Search <span>04</span></a>
        <a href="rone-account-v1.html">Account <span>05</span></a>
        <a href="rone-saved-v1.html">Saved pieces <span>06</span></a>
      </nav>
      <div class="mobile-menu-meta">${currencyPicker("currency-picker--mobile")}<span>Rone 2026</span></div>
    </div>`;

  const footerHost = document.querySelector("[data-rone-footer]");
  if (footerHost) {
    footerHost.innerHTML = `
      <footer class="site-footer">
        <div class="footer-brand"><div class="footer-wordmark">Rone</div></div>
        <div class="footer-column"><h2>Shop</h2><a href="rone-shop-v1.html?sort=newest">New arrivals</a><a href="rone-shop-v1.html?category=Clothing">Clothing</a><a href="rone-shop-v1.html?category=Bags">Bags</a><a href="rone-shop-v1.html?category=Shoes">Shoes</a><a href="rone-shop-v1.html?category=Underwear">Underwear</a></div>
        <div class="footer-column"><h2>Assistance</h2><a href="rone-care-v1.html#contact">Contact</a><a href="rone-care-v1.html#delivery">Delivery &amp; returns</a><a href="rone-care-v1.html#product-care">Product care</a><a href="rone-care-v1.html#size-guide">Size guide</a><a href="rone-tracking-v1.html">Track an order</a></div>
        <div class="footer-column"><h2>Rone</h2><a href="rone-about-v1.html">About</a><a href="rone-collections-v1.html">Collections</a><a href="rone-account-v1.html">Account</a><a href="rone-saved-v1.html">Saved pieces</a><a href="rone-search-v1.html">Search</a></div>
      </footer>
      <div class="footer-bottom"><span>&copy; 2026 Rone</span><span class="footer-policy-links"><a href="rone-policies-v1.html#privacy">Privacy</a><a href="rone-policies-v1.html#terms">Terms</a><a href="rone-policies-v1.html#accessibility">Accessibility</a></span>${currencyPicker("currency-picker--footer")}</div>`;
  }

  document.body.classList.add("has-rone-shell");
  window.RONE_CURRENCY?.refresh();

  const bagCountNodes = [...document.querySelectorAll("[data-shell-bag-count]")];
  function updateBagCount() {
    let bag = [];
    try { bag = JSON.parse(localStorage.getItem("roneBagV1") || "[]"); } catch (error) { bag = []; }
    const quantity = Array.isArray(bag) ? bag.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0) : 0;
    bagCountNodes.forEach((node) => { node.textContent = quantity; });
  }

  const navPreview = document.querySelector("[data-nav-preview]");
  const previewTriggers = [...document.querySelectorAll("[data-nav-preview-trigger]")];
  let previewTimer;

  function openPreview(name) {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    window.clearTimeout(previewTimer);
    navPreview.inert = false;
    navPreview.setAttribute("aria-hidden", "false");
    navPreview.classList.add("open");
    document.querySelectorAll("[data-nav-preview-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.navPreviewPanel === name));
    previewTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", String(trigger.dataset.navPreviewTrigger === name)));
  }

  function closePreview() {
    window.clearTimeout(previewTimer);
    navPreview.classList.remove("open");
    navPreview.setAttribute("aria-hidden", "true");
    navPreview.inert = true;
    previewTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  }

  function schedulePreviewClose() {
    window.clearTimeout(previewTimer);
    previewTimer = window.setTimeout(closePreview, 140);
  }

  previewTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => openPreview(trigger.dataset.navPreviewTrigger));
    trigger.addEventListener("focus", () => openPreview(trigger.dataset.navPreviewTrigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      openPreview(trigger.dataset.navPreviewTrigger);
      navPreview.querySelector(".nav-preview-panel.active a")?.focus();
    });
  });

  document.querySelector("[data-site-header]").addEventListener("mouseleave", schedulePreviewClose);
  navPreview.addEventListener("mouseenter", () => window.clearTimeout(previewTimer));
  navPreview.addEventListener("mouseleave", schedulePreviewClose);

  const mobileMenu = document.querySelector("[data-mobile-menu]");
  function openMenu() {
    closePreview();
    mobileMenu.inert = false;
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.classList.add("open");
    document.body.classList.add("no-scroll");
    window.setTimeout(() => mobileMenu.querySelector("[data-menu-close]")?.focus(), 30);
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.inert = true;
    document.body.classList.remove("no-scroll");
    document.querySelector("[data-menu-open]")?.focus();
  }

  document.querySelector("[data-menu-open]").addEventListener("click", openMenu);
  document.querySelector("[data-menu-close]").addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
    else if (event.key === "Escape" && navPreview.classList.contains("open")) closePreview();
  });

  window.addEventListener("storage", updateBagCount);
  updateBagCount();
  window.__RONE_SHELL_READY__ = true;
}());
