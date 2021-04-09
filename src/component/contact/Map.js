import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../styles/Map.css';

const MyMap = () => {
  const positionOne = [29.89743, -97.827507];
  const positionTwo = [35.952461, -83.991531];
  const center = [33.54858, -93.676758];
  return (
    <MapContainer center={center} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={positionOne}>
        <Popup>3399 Wines Lane TX</Popup>
      </Marker>
      <Marker position={positionTwo}>
        <Popup>1892 Chenoweth Drive TN</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
