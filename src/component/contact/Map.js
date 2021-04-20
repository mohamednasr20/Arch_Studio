import React, { useRef } from 'react';
import ContactDetails from './ContactDetails';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../styles/contact/Map.css';

const Map = () => {
  const mapRef = useRef();

  const handleMapScroll = (element) => {
    element.current.scrollIntoView({ behavior: 'smooth' });
  };

  const locations = [
    {
      address: '1892 Chenoweth Drive TN',
      position: [35.952461, -83.991531],
    },
    {
      address: '3399 Wines Lane TX',
      position: [29.89743, -97.827507],
    },
  ];

  const center = [32.95954333, -90.997501];

  const makers = locations.map((location) => {
    return (
      <Marker key={location.address} position={location.position}>
        <Popup>{location.address}</Popup>
      </Marker>
    );
  });

  return (
    <>
      <ContactDetails handleScroll={() => handleMapScroll(mapRef)} />
      <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <div ref={mapRef}>{makers}</div>
      </MapContainer>
    </>
  );
};

export default Map;
