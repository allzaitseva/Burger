/** @format */

export default function Sale() {
  return (
    <section id='Sale' className='w-full max-h-110 mt-10 bg-[#ff721b]'>
      <div className='relative max-w-7xl mx-auto px-4 py-10 lg:py-0 lg:px-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
          {/* Text block */}
          <div className='flex flex-col items-center text-center text-white md:items-start md:text-left md:mt-10 lg:ml-0 lg:-mt-45'>
            <p className='text-[28px] md:text-[30px] lg:text-[32px] font-bold tracking-tight'>
              Get Up To
            </p>

            <div className='flex items-baseline gap-2 md:gap-3'>
              <span className='text-[40px] md:text-[48px] lg:text-[50px] font-extrabold drop-shadow-lg'>
                50%
              </span>
              <span className='text-[32px] md:text-[40px] lg:text-[45px] font-bold tracking-wide'>
                OFF
              </span>
            </div>

            <p className='text-[28px] md:text-[30px] lg:text-[32px] font-bold tracking-tight mt-2 md:mt-0'>
              On Your 2 Order’s
            </p>

            <a
              href='/menu'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 inline-flex items-center justify-center w-full max-w-[220px] md:max-w-[260px] rounded-2xl bg-white text-[#F78E1E] font-bold px-6 py-3 md:py-4 text-lg md:text-xl lg:text-2xl z-10 shadow-md hover:shadow-lg transition tracking-wide'>
              Order Now
            </a>
          </div>

          {/* Image block */}
          <div className='relative flex items-center justify-center'>
            <img
              src='/burgersSale.png'
              alt='Two burgers combo with fries and drink'
              className='
              w-full h-auto max-w-[320px] -mt-30
              sm:max-w-[420px]
              md:max-w-[500px] md:w-[28rem] md:h-[28rem] md:ml-60 md:-mt-100
              lg:max-w-none lg:w-[45rem] lg:h-[45rem] lg:-mt-55 lg:mr-90 object-contain select-none
              '
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
      </div>
    </section>
  );
}