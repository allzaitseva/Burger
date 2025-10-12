/** @format */
import { Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OutletsPage from "./pages/OutletsPage";

// Leaflet:
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import icon2xUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl: icon2xUrl, shadowUrl });

function Layout() {
  return (
    <>
      <Toaster position="top-center" />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/outlets' element={<OutletsPage />} />
      </Route>
    </Routes>
    
  );
}
