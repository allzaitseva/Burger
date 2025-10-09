export function loadCart() {
  try {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : undefined;
  } catch { return undefined; }
}

export function saveCart(cartState) {
  try {
    localStorage.setItem("cart", JSON.stringify(cartState));
  } catch {}
}