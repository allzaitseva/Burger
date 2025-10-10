/** @format */

import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const OUTLETS = [
  {
    id: "o1",
    name: "Old Town Outlet",
    lat: 50.0830,
    lon: 14.4160,
    desc: "Staroměstské náměstí, 110 00, Staré Město, Praha 1.",
  },
  {
    id: "o2",
    name: "Vinohrady Outlet",
    lat: 50.0762,
    lon: 14.4488,
    desc: "Slezská 66, 130 00, Vinohrady Praha 3.",
  },
];

  const outletIcon = L.divIcon({
    html: "📍",
    className: "text-3xl",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -25],
  });

const overpassQuery = `
[out:json][timeout:25];
area["name"="Praha"]["boundary"="administrative"]->.a;
(
  nwr(area.a)["shop"="mall"];
  nwr(area.a)["amenity"="mall"];
);
out center;
`;

export default function Map() {
  const [setMalls] = useState([]);
  const [loading, setLoading] = useState(false);
  const center = useMemo(() => [50.0755, 14.4378], []);

  useEffect(() => {
    let aborted = false;
    setLoading(true);
    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: overpassQuery,
    })
      .then((r) => r.json())
      .then((data) => {
        if (aborted) return;
        const points = (data.elements || [])
          .map((el) => {
            const lat = el.lat || el.center?.lat;
            const lon = el.lon || el.center?.lon;
            if (!lat || !lon) return null;
            return {
              id: `${el.type}/${el.id}`,
              name: el.tags?.name || "Shopping Mall",
              lat,
              lon,
              addr: [
                el.tags?.["addr:street"],
                el.tags?.["addr:housenumber"],
                el.tags?.["addr:city"],
              ]
                .filter(Boolean)
                .join(" "),
            };
          })
          .filter(Boolean);
        setMalls(points);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
    return () => {
      aborted = true;
    };
  }, []);

  return (
    <div className='relative w-full h-120 mt-15 px-10 lg:px-16 xl:px-32 2xl:px-72'>
      <MapContainer
        center={center}
        zoom={12}
        className="z-1 rounded-xl size-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* My outlets */}
        {OUTLETS.map((o) => (
          <Marker key={o.id} position={[o.lat, o.lon]} icon={outletIcon}>
            <Popup>
              <strong>{o.name}</strong>
              <br />
              {o.desc || "Outlet"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {loading && <div className='mt-7 text-white/80'>Loading outlets…</div>}
    </div>
  );
}
