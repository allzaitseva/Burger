import AddToCart from "../AddToCart";
export default function ProductCard ({ id, title, price, img, eurCzk, isFavourite, onToggle }) {
  const backendImgUrl = `https://burger-be-production.up.railway.app/images${
    String(img).startsWith("/") ? img : `/${img}`
  }`;
  console.log("IMG:", { id, title, img, url: backendImgUrl });

  const roundToTenUp = (v) => Math.ceil(v / 10) * 10; // 238→240
  const priceEur = Number(price);
  const priceCzk =
    eurCzk && Number.isFinite(priceEur)
      ? Math.ceil(priceEur * Math.ceil(eurCzk))
      : null;

  const fmtCZK = (v) =>
    new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(roundToTenUp(v));

  const fmtEUR = (v) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(v);

  return (
    <article
      className='group relative rounded-3xl bg-[#F78E1E] text-white p-6 pt-8
                 shadow-[0_20px_40px_rgba(247,142,30,0.35)]
                 transition-transform duration-1000 hover:-translate-y-1'>
      <div className='absolute top-4 right-4 flex items-center'>
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
        <span className='text-white text-xs font-bold select-none -ml-1'>
          {isFavourite ? 1 : ""}
        </span>
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
        <div className='flex flex-col leading-tight'>
          <span className='font-semibold'>{fmtEUR(priceEur)}</span>
          {priceCzk && (
            <span className='text-white/80 text-sm'>{fmtCZK(priceCzk)}</span>
          )}
        </div>
        </div>
        <AddToCart id={id} title={title} price={price} img={img} openOnAdd />
    </article>
);
}