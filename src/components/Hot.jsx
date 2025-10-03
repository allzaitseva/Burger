/** @format */

import { useEffect, useMemo, useState } from "react";
import { hotService } from "../services/hotService";

const PAGE_SIZE = 4;
const FAV_KEY = "fav-burgers";

const loadFavs = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []);
  } catch {
    return new Set();
  }
};
const saveFavs = (set) => {
  localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(set)));
};

export default function Hot() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [favs, setFavs] = useState(() => loadFavs());

  useEffect(() => {
    hotService.getHotItems().then(setItems);
  }, []);

  const toggleFav = (id) => {
    setFavs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveFavs(next);
      return next;
    });
  };

  const sorted = useMemo(() => {
    const enriched = items.map((it) => ({
      ...it,
      isFavourite: favs.has(it.id),
    }));
    enriched.sort((a, b) => {
      const byLikes = (b.likes ?? 0) - (a.likes ?? 0);
      if (byLikes !== 0) return byLikes;
      if (a.isFavourite !== b.isFavourite) return b.isFavourite - a.isFavourite;
      return String(a.title).localeCompare(String(b.title));
    });
    return enriched;
  }, [items, favs]);

  const start = page * PAGE_SIZE;
  const pageItems = sorted.slice(start, start + PAGE_SIZE);

  if (!items.length) {
    return (
      <section id='hot' className='max-w-6xl mx-auto px-4 sm:px-6 py-20'>
        <h2 className='text-2xl sm:text-3xl font-extrabold mb-3 text-white text-center'>
          — HOT ITEMS —
        </h2>
        <p className='text-white text-center text-xl mb-10 ds45'>Loading...</p>
      </section>
    );
  }

  return (
    <section id='hot' className='max-w-6xl mx-auto px-4 sm:px-6 py-20'>
      <h2 className='text-2xl sm:text-3xl font-extrabold mb-3 text-white text-center'>
        — HOT ITEMS —
      </h2>
      <p className='text-white text-center text-xl mb-10 ds45'>
        LOCALLY SOURCED, ORGANIC INGREDIENTS FOR A FRESH AND ECO-FRIENDLY
        EXPERIENCE
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {pageItems.map((it) => (
          <HotCard
            key={it.id}
            id={it.id}
            title={it.title}
            price={it.price}
            img={it.img}
            isFavourite={it.isFavourite}
            onToggle={() => toggleFav(it.id)}
          />
        ))}
      </div>
    </section>
  );
}

function HotCard({ id, title, price, img, isFavourite, onToggle }) {
  const backendImgUrl =
    `https://burger-be-production.up.railway.app/images${img}`;
  return (
    <article
      className='
        group relative rounded-3xl bg-[#F78E1E] text-white p-6 pt-8
        shadow-[0_20px_40px_rgba(247,142,30,0.35)]
        transition-transform duration-300 hover:-translate-y-1
      '>
      <div className="absolute top-4 right-4 flex items-center">
        <button
          onClick={onToggle}
          className='w-8 h-8 rounded-full/2 text-white/90 hover:text-white cursor-pointer'
          aria-label={`favorite-${id}`}>
          <svg
            viewBox='0 0 24 24'
            className={`w-6 h-6 stroke-current ${
              isFavourite ? "fill-white" : "fill-none"
            }`}>
            <path
              d='M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z'
              strokeWidth='1.5'
            />
          </svg>
        </button>
        <span className="text-white text-xs font-bold select-none -ml-1">{isFavourite ? 1 : ""}</span>
      </div>

      <div className='flex justify-center mb-6 img-shadow'>
        <img
          src={backendImgUrl}
          alt={title}
          width={300}
          height={220}
          decoding='async'
          loading='lazy'
          className='block h-40 w-auto drop-shadow'
        />
      </div>

      <h3 className='font-semibold text-lg mb-3'>{title}</h3>

      <div className='flex items-center justify-between'>
        <span className='font-semibold'>€{price}</span>
        <button className='inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 cursor-pointer'>
          <svg viewBox='0 0 24 24' className='w-5 h-5 fill-none stroke-current'>
            <path d='M6 6h15l-2 9H7L6 6z' strokeWidth='1.5' />
            <circle cx='9' cy='20' r='1' />
            <circle cx='18' cy='20' r='1' />
          </svg>
        </button>
      </div>
    </article>
  );
}