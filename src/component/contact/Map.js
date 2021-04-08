import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import { API_KEY } from '../../api_key'
import '../../styles/Map.css';



const Map = ({ location, zoomLevel }) => {
  const location2 = {
    address: '1892 Chenoweth Drive TN',
    lat: 35.952461,
    lng: -83.991531,
  };

  return (
    <div className="Map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
          <LocationPin
            lat={location2.lat}
            lng={location2.lng}
            text={location2.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
