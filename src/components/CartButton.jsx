/** @format */
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  selectCartOpen,
  selectCartItems,
  selectTotalEur,
  inc,
  dec,
  removeItem,
  clear,
} from "../cartSlice";

/** Мемо-строка корзины: хуки вызываются на верхнем уровне компонента */
const CartItem = React.memo(function CartItem({ id, title, price, qty, img, eurCzk }) {
  const dispatch = useDispatch();

  const onInc = useCallback(() => dispatch(inc(id)), [dispatch, id]);
  const onDec = useCallback(() => dispatch(dec(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeItem(id)), [dispatch, id]);

  const backendImgUrl = useMemo(() => (
    img?.startsWith("http") ? img : `https://burger-be-production.up.railway.app/images${img || ""}`
  ), [img]);

  return (
    <div className="grid grid-cols-[80px_1fr_auto] gap-4 items-center border rounded-xl p-3">
      <img
        src={backendImgUrl}
        alt={title || "product"}
        width={80}
        height={60}
        decoding="async"
        loading="lazy"
        className="h-20 w-20 object-cover rounded-lg drop-shadow"
      />

      <div className="min-w-0">
        <p className="font-medium truncate">{title}</p>
        <p className="text-sm text-gray-600">€{price.toFixed(2)}</p>
        {eurCzk && <p className="text-xs text-gray-500">≈ {Math.round(price * eurCzk)} CZK</p>}
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button type="button" onClick={onDec} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50" aria-label={`Decrease ${title}`}>−</button>
          <span className="w-6 text-center tabular-nums">{qty}</span>
          <button type="button" onClick={onInc} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50" aria-label={`Increase ${title}`}>+</button>
        </div>
        <button type="button" onClick={onRemove} className="text-xs text-red-600 hover:underline">Remove</button>
      </div>
    </div>
  );
});

export function CartButton({ eurCzk }) {
  const dispatch = useDispatch();
  const open = useSelector(selectCartOpen);
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectTotalEur);

  // мемо-подсчёты
  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const totalCZK = useMemo(() => (eurCzk ? Math.round(subtotal * eurCzk) : null), [eurCzk, subtotal]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && dispatch(toggleCart(false));
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, dispatch]);

  const panelRef = useRef(null);

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex justify-center items-start pt-10"
      onClick={(e) => { if (e.target === e.currentTarget) dispatch(toggleCart(false)); }}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/50 opacity-100 transition-opacity duration-300" />
      <aside
        id="cart-drawer"
        role="dialog"
        aria-label="Cart"
        ref={panelRef}
        className="absolute w-full md:w-[768px] max-h-[80vh] bg-white shadow-xl rounded-md mt-10 transform-gpu transition-transform duration-300 translate-x-0 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">Cart ({count})</h2>
          <button
            type="button"
            onClick={() => dispatch(toggleCart(false))}
            aria-label="Close"
            className="w-9 h-9 rounded-md hover:bg-black/10 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-black/80 text-center">The cart is empty…</p>
          ) : (
            items.map(({ id, title, price, qty, img }) => (
              <CartItem
                key={id}
                id={id}
                title={title}
                price={price}
                qty={qty}
                img={img}
                eurCzk={eurCzk}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">€{subtotal.toFixed(2)}</span>
          </div>
          {eurCzk && (
            <div className="flex justify-between text-sm text-gray-600">
              <span>≈ CZK</span>
              <span className="font-medium">{totalCZK.toLocaleString("cs-CZ")}</span>
            </div>
          )}
          <div className="flex gap-2 pt-1">
            <button type="button" className="px-3 py-2 rounded-lg border hover:bg-gray-50 cursor-pointer" onClick={() => dispatch(clear())}>Clear</button>
            <button type="button" className="flex-1 rounded-lg bg-black text-white py-2 hover:opacity-90 cursor-pointer" onClick={() => { dispatch(toggleCart(false)); console.log("Checkout clicked"); }}>Checkout</button>
          </div>
        </div>
      </aside>
    </div>
  );

  return (
    <div className="relative z-[60]">
      <button
        type="button"
        className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/25 transition-colors"
        onClick={(e) => { e.stopPropagation(); dispatch(toggleCart()); }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="cart-drawer"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current text-white cursor-pointer">
          <path d="M6 6h15l-2 9H7L6 6z" strokeWidth="1.5" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-xs font-medium bg-white text-black flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {mounted && open && createPortal(modal, document.body)}
    </div>
  );
}