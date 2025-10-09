/** @format */

export default function Hero() {
  return (
    <section
      id='home'
      className='relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-24'>
      <div className='grid md:grid-cols-2 items-center gap-10 md:gap-6 ml-0 xl:ml-15'>
        <div>
          <p className='text-white font-extrabold tracking-wide text-lg md:text-xl'>
            Crispy, Crunchy, Veggie Deliciousness!
          </p>
          <h1 className='mt-2 text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl'>
            Burgers That
            <br />
            Love the Earth!
          </h1>

          <div className='mt-8 flex items-center gap-5'>
            <a
              href='#hot'
              className='inline-flex items-center px-6 py-3 rounded-xl text-[#F78E1E] bg-white hover:bg-white/90 font-semibold shadow'>
              Explore
            </a>
          </div>
        </div>

        <div className='relative flex justify-center md:justify-end items-center'>
          {/* SALE badge */}
          <div className='absolute z-10 size-16 sm:size-20 top-2 left-6 sm:top-3 sm:left-30 md:top-12 md:left-10'>
            <img
              src='/starSale.svg'
              alt='Sale'
              width={80}
              height={80}
              className='block drop-shadow'
            />
            <p className='absolute z-20 text-[#ff7700] font-black -rotate-20 top-4 left-4 sm:top-6 sm:left-6 text-sm leading-4'>
              75% OFF
            </p>
          </div>

          {/* Main burger image */}
          <div className='relative w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl  -mt-10 sm:-mt-30 md:mt-0 pr-3 lg:pr-20 xl:pr-40'>
            <img
              src='/heroBurgers.png'
              alt='Burgers'
              width={1200}
              height={900}
              loading='lazy'
              decoding='async'
              className='block h-auto w-full transform-gpu scale-110 md:scale-125 lg:scale-150'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
