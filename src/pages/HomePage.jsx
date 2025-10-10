/** @format */

// import { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hot from "../components/Hot";
import Sale from "../components/Sale";
import About from "../components/About";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className='min-h-screen relative overflow-hidden bg-gradient-to-r from-[#FBC08B] to-[#FAD3A2]'>
      <div>
        <img
          src='form-bg.png'
          alt='form'
          className='absolute z-0 right-0 
        lg:w-180 lg:h-155 
        md:w-100 md:h-150 
        sm:w-90 sm:h-190
        w-65 h-170'
        />
      </div>
      <Navbar />
      <Hero />
      <Hot />
      <Sale />
      <About />
      <Footer />
      </div>
)}
