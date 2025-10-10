/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer id='contact' className='w-full h-full mt-20 bg-[#f15c3f] p-5'>
      <div className='static lg:flex lg:px-10 lg:justify-center xl:gap-10'>
        <div className='w-full lg:w-[400px] lg:-ml-25 xl:-ml-30'>
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
            Delicious burgers made with fresh ingredients. Serving you with love
            and taste, every single bite brings happiness.
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

        <div className='w-full lg:w-[100px] lg:ml-10'>
          <p className='relative mt-5 font-black text-white underline'>
            Services
          </p>
          <ul className='relative mt-5 text-white text-base/8 font-medium cursor-pointer'>
            <li>
              <Link to='/menu' target='_blank' rel='noopener noreferrer'>
                Menu
              </Link>
            </li>
            <li>
              <a href='/#hot'>Hot Items</a>
            </li>
            <li>
              <a href='/#About'>About</a>
            </li>
          </ul>
        </div>

        <div className='w-full lg:w-[120px] lg:ml-0'>
          <p className='relative mt-5 font-black text-white underline'>
            Follow Us
          </p>
          <ul className='relative mt-5 text-white text-base/8 font-medium cursor-pointer'>
            <li>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'>
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://x.com' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full mt-5 lg:w-[200px]'>
          <label
            htmlFor='email'
            className='relative mt-5 font-black text-white underline'>
            Subscribe for Updates
          </label>
          <EmailPostForm />
        </div>
      </div>
      <div className='text-end text-white mt-8 opacity-70'>
        © {new Date().getFullYear()} BURGER
      </div>
    </footer>
  );
}

function EmailPostForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(
        "https://burger-be-production.up.railway.app/news_subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
      } else {
        setStatus("Error. Try again.");
      }
    } catch {
      setStatus("Error. Try again.");
    }
  };

  return (
    <div onSubmit={handleSubmit} className=''>
      <form className='flex grid-cols-1 mt-5 gap-5 w-full max-w-xs'>
        <input
          type='email'
          id='email'
          className='w-[200px] h-[40px] bg-gray-50 border border-gray-300 text-orange-700/60 text-sm rounded-lg p-2.5'
          placeholder='Enter your e-mail...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type='submit'
          className='px-4 py-2 -ml-2 bg-orange-400 hover:bg-[#ff721b] text-white rounded-lg self-start cursor-pointer'>
          Subscribe
        </button>
      </form>
      {status && (
        <div
          className={
            status === "Subscribed!"
              ? "mt-2 text-green-300 font-bold"
              : "mt-2 text-red-300 font-bold"
          }>
          {status}
        </div>
      )}
    </div>
  );
}
