(function () {
  const STORAGE_KEY = "roneCurrencyV1";
  const DEFAULT_CURRENCY = "NGN";
  const USD_TO_NGN = 1600;
  const supported = new Set(["NGN", "USD"]);

  function storedCurrency() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return supported.has(value) ? value : DEFAULT_CURRENCY;
    } catch (error) {
      return DEFAULT_CURRENCY;
    }
  }

  let activeCurrency = storedCurrency();

  function convert(usdAmount, currency = activeCurrency) {
    const amount = Number(usdAmount) || 0;
    return currency === "NGN" ? amount * USD_TO_NGN : amount;
  }

  function format(usdAmount, options = {}) {
    const currency = supported.has(options.currency) ? options.currency : activeCurrency;
    const formatter = new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: options.minimumFractionDigits ?? 0,
      maximumFractionDigits: options.maximumFractionDigits ?? 0
    });
    return formatter.format(convert(usdAmount, currency));
  }

  function locationLabel(currency = activeCurrency) {
    return currency === "NGN" ? "Nigeria / NGN" : "United States / USD";
  }

  function refresh(root = document) {
    root.querySelectorAll("[data-currency-select]").forEach((select) => {
      if (select.value !== activeCurrency) select.value = activeCurrency;
    });
    root.querySelectorAll("[data-money-usd]").forEach((node) => {
      const value = format(node.dataset.moneyUsd, {
        minimumFractionDigits: Number(node.dataset.moneyMinimumFractionDigits || 0),
        maximumFractionDigits: Number(node.dataset.moneyMaximumFractionDigits || 0)
      });
      if (node.textContent !== value) node.textContent = value;
    });
    root.querySelectorAll("[data-currency-location]").forEach((node) => {
      const value = locationLabel();
      if (node.textContent !== value) node.textContent = value;
    });
  }

  function set(currency) {
    if (!supported.has(currency) || currency === activeCurrency) {
      refresh();
      return;
    }
    activeCurrency = currency;
    try { localStorage.setItem(STORAGE_KEY, activeCurrency); } catch (error) { /* Persistence is optional. */ }
    refresh();
    window.dispatchEvent(new CustomEvent("rone:currencychange", { detail: { currency: activeCurrency } }));
  }

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-currency-select]")) set(event.target.value);
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || !supported.has(event.newValue)) return;
    activeCurrency = event.newValue;
    refresh();
    window.dispatchEvent(new CustomEvent("rone:currencychange", { detail: { currency: activeCurrency } }));
  });

  window.RONE_CURRENCY = Object.freeze({
    convert,
    format,
    get: () => activeCurrency,
    locationLabel,
    refresh,
    set,
    usdToNgnRate: USD_TO_NGN
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => refresh(), { once: true });
  else refresh();
}());
