import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hot from './components/Hot'
import Sale from './components/Sale'
import About from './components/About'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-[#FBC08B] to-[#FAD3A2]">

      <div>
        <img src="form-bg.png" alt="form" className='absolute z-0 right-0 
        lg:w-180 lg:h-175 
        md:w-100 md:h-155 
        w-65 h-200'/>
      </div>
      
      <Navbar />
      <Hero />
      <Hot />
      <Sale />
      <About />
      <footer className="py-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} BURGER.
      </footer>
    </div>
  )
}

