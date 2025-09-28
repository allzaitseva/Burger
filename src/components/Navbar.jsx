/** @format */

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  return (
    <header className='relative max-w-6xl mx-auto px-4 sm:px-6 pt-6'>
      <div className='flex items-center justify-between'>
        <a
          href='#'
          className='text-shadow-lg flex items-center gap-2 font-black tracking-wide text-white'>
          <img
            src='/burgerIcon.svg'
            alt='logo'
            className='img-shadow w-8 h-8 md:w-10 md:h-10'
          />
          <span>BURGER</span>
        </a>

        <nav className='text-shadow-lg hidden md:flex absolute z-10 left-1/2 -translate-x-1/2 top-6 gap-10 text-white font-bold'>
          <a href='#home' className='hover:text-green-700'>
            Home
          </a>
          <a href='#outlets' className='hover:text-red-700'>
            Our outlets
          </a>
          {/* <Link to="/menu" className="hover:text-amber-500">Menu</Link> */}
          <a href='#menu' className='hover:text-amber-950'>
            Menu
          </a>
          <a href='#contact' className='hover:text-amber-300'>
            Contact
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label='Open menu'
          className='md:hidden inline-flex w-10 h-10 items-center justify-center cursor-pointer'>
          <img src='/burgerMenu.svg' alt='menu' className='w-6 h-6' />
        </button>
      </div>

      <div
        className={[
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        aria-hidden={!open}>
        <div
          className={[
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <aside
          className={[
            "absolute inset-y-0 right-0 w-72 max-w-[85%] max-h-80 bg-[#FF9131] shadow-xl rounded-md",
            "transform-gpu transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}>
          <div className='flex items-center justify-end px-5 py-4 '>
            <button
              onClick={() => setOpen(false)}
              aria-label='Close'
              className='w-9 h-9 rounded-md hover:bg-[#FBC08B] cursor-pointer'>
              ✕
            </button>
          </div>
          <nav className='flex flex-col p-5 text-slate-800 text-lg font-bold'>
            <a
              href='#home'
              className='py-3 px-2 hover:bg-[#FBC08B] rounded-md'
              onClick={() => setOpen(false)}>
              Home
            </a>
            <a
              href='#outlets'
              className='py-3 px-2 hover:bg-[#FBC08B] rounded-md'
              onClick={() => setOpen(false)}>
              Our outlets
            </a>
            <a
              href='#order'
              className='py-3 px-2 hover:bg-[#FBC08B] rounded-md'
              onClick={() => setOpen(false)}>
              Order
            </a>
            <a
              href='#menu'
              className='py-3 px-2 hover:bg-[#FBC08B] rounded-md'
              onClick={() => setOpen(false)}>
              Menu
            </a>
            <a
              href='#contact'
              className='py-3 px-2 hover:bg-[#FBC08B] rounded-md'
              onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
