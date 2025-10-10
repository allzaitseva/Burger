/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

export default function OutletsPage() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-[#FBC08B] to-[#FAD3A2]'>
      <Navbar />
      <Map />
      <Footer />
    </main>
  );
}