import { useState } from "react";

const items = [
  { id: 1, title: 'Classic Beef Supreme', price: '11.50', img: '/B1.png' },
  { id: 2, title: 'Smoky Bacon Tower', price: '12.20', img: '/B2.png' },
  { id: 3, title: 'Texas BBQ Beef', price: '12.80', img: '/B3.png' },
  { id: 4, title: 'Double Meat Monster', price: '13.50', img: '/B4.png' },
  { id: 5, title: 'Hot Chili Beef Blast', price: '12.00', img: '/b4.png' },
  { id: 6, title: 'Veg Chizy Burger', price: '9.50', img: '/b4.png' },
  { id: 7, title: 'Triple Cheese Melt', price: '11.20', img: '/b4.png' },
  { id: 8, title: 'Cheddar Crunch Burger', price: '10.80', img: '/b4.png' },
  { id: 9, title: 'Blue Cheese Deluxe', price: '12.40', img: '/b4.png' },
  { id: 10, title: 'Mozzarella Magic', price: '11.00', img: '/b4.png' },
  { id: 11, title: 'Swiss Alps Cheese Burger', price: '12.90', img: '/b4.png' },
  { id: 12, title: 'Green Delight Burger', price: '8.90', img: '/b4.png' },
  { id: 13, title: 'Spicy Bean Crunch', price: '9.20', img: '/b4.png' },
  { id: 14, title: 'Avocado Dream Burger', price: '9.80', img: '/b4.png' },
  { id: 15, title: 'Vegan BBQ Smoke', price: '10.50', img: '/b4.png' },
  { id: 16, title: 'Mediterranean Veggie Bite', price: '9.90', img: '/b4.png' },
];

const PAGE_SIZE = 4;

export default function Hot() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / PAGE_SIZE);

  const start = page * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  const prev = () => setPage(p => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage(p => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section id="hot" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white text-center">
        — HOT ITEMS —
      </h2>
      <p className="text-white text-center text-xl mb-10 ds45">
        LOCALLY SOURCED, ORGANIC INGREDIENTS FOR A FRESH AND ECO-FRIENDLY EXPERIENCE
      </p>

      <div className="relative">
        <button
          onClick={prev}
          className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 
                     w-15 h-15 rounded-full bg-white/95 shadow items-center justify-center cursor-pointer"
          aria-label="prev"
        >
          ←
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageItems.map((it) => (
            <HotCard key={it.id} {...it} />
          ))}
        </div>

        <button
          onClick={next}
          className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 
                     w-15 h-15 rounded-full bg-white/95 shadow items-center justify-center cursor-pointer"
          aria-label="next"
        >
          →
        </button>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`go to page ${i + 1}`}
              className={`size-2 rounded-full ${
                i === page ? 'bg-white/80 w-3 h-3' : 'bg-white/40'
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HotCard({ title, price, img }) {
  return (
    <article
      className="
        group relative rounded-3xl bg-[#F78E1E] text-white p-6 pt-8
        shadow-[0_20px_40px_rgba(247,142,30,0.35)]
        transition-transform duration-300 hover:-translate-y-1
      "
    >
      <button
        className="absolute top-4 right-4 w-8 h-8 rounded-full/2 text-white/90 hover:text-white cursor-pointer"
        aria-label="favorite"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current">
          <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z" strokeWidth="1.5" />
        </svg>
      </button>

      <div className="flex justify-center mb-6 img-shadow">
        <img
          src={img}
          alt={title}
          width={300}
          height={220}
          decoding="async"
          loading="lazy"
          className="block h-40 w-auto drop-shadow"
        />
      </div>

      <h3 className="font-semibold text-lg mb-3">{title}</h3>

      <div className="flex items-center justify-between">
        <span className="font-semibold">€{price}</span>
        <button className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
            <path d="M6 6h15l-2 9H7L6 6z" strokeWidth="1.5" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </button>
      </div>
    </article>
  );
}