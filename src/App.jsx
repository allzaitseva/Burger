/** @format */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hot from "./components/Hot";
import Sale from "./components/Sale";
import About from "./components/About";

export default function App() {
  return (
    <div className='min-h-screen relative overflow-hidden bg-gradient-to-r from-[#FBC08B] to-[#FAD3A2]'>
      <div>
        <img
          src='form-bg.png'
          alt='form'
          className='absolute z-0 right-0 
        lg:w-180 lg:h-175 
        md:w-100 md:h-155 
        w-65 h-200'
        />
      </div>

      <Navbar />
      <Hero />
      <Hot />
      <Sale />
      <About />

      <footer className='w-full h-full mt-20 bg-[#f15c3f] p-5'>
        <div className='static lg:flex lg:px-10 lg:justify-center'>
          <div className='w-full lg:w-[400px]'>
            <a
              href='#'
              className='text-shadow-lg flex items-center py-5 gap-2 font-black tracking-wide text-white'>
              <img
                src='/burgerIcon.svg'
                alt='logo'
                className='img-shadow w-8 h-8 md:w-10 md:h-10'
              />
              <span>BURGER</span>
            </a>
            <p className='text-white uppercase font-medium text-[14px]'>
              Delicious burgers made with fresh ingredients. Serving you with
              love and taste, every single bite brings happiness.
            </p>
            <p className='relative mt-5 font-black text-white underline'>
              Contact
            </p>
            <ul className='relative mt-5 text-white text-base/8 font-medium'>
              <li>📞 +420 987654321</li>
              <li>📧 mail@gmail.com</li>
              <li>📍 XYZ, Anywhere Road, Sector 4</li>
            </ul>
          </div>

          <div className='w-full lg:w-[200px] lg:ml-7'>
            <p className='relative mt-5 font-black text-white underline'>
              Services
            </p>
            <ul className='relative mt-5 text-white text-base/8 font-medium cursor-pointer'>
              <li href='#'>Menu</li>
              <li href='#'>Hot Items</li>
              <li href='#'>About</li>
            </ul>
          </div>

          <div className='w-full lg:w-[200px] lg:ml-7'>
            <p className='relative mt-5 font-black text-white underline'>
              Follow Us
            </p>
            <ul className='relative mt-5 text-white text-base/8 font-medium cursor-pointer'>
              <li href='#'>Facebook</li>
              <li href='#'>Instagram</li>
              <li href='#'>Twitter</li>
            </ul>
          </div>
          <div class='flex grid-cols-1 mt-5 gap-5'>
            <label for='email' class='font-black text-white'>
              Subscribe for Updates
            </label>
            <input
              type='email'
              id='email'
              class='mt-10 lg:mt-13.5 w-[250px] h-[40px] -ml-51 bg-gray-50 border border-gray-300 text-orange-700/60 text-sm rounded-lg p-2.5'
              placeholder='Enter your e-mail...'
            />
          </div>
        </div>
        <div className='text-end text-white mt-8 opacity-70'>
          © {new Date().getFullYear()} BURGER
        </div>
      </footer>
    </div>
  );
}
