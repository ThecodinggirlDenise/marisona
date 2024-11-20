import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "25px",
};

// Center the camera in Turkey
const center = {
  lat: 38.963745, // Latitude for Turkey (approx. center)
  lng: 35.243322, // Longitude for Turkey (approx. center)
};

// Markers with names
const coastalMarkers = [
  { lat: 36.621082, lng: 29.123777, name: "Fethiye" },
  { lat: 36.893558, lng: 30.713323, name: "Antalya" },
  { lat: 39.48401, lng: 26.938114, name: "Ayvalık" },
  { lat: 40.755312, lng: 29.943217, name: "Istanbul (Sea of Marmara)" },
  { lat: 37.870593, lng: 32.50585, name: "Konya (Inland)" },
  { lat: 41.08648, lng: 28.65027, name: "Istanbul (Black Sea)" },
];

const MapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA1OLvJdBS84cOb9x8Srke6Boa8KMIgZCo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {coastalMarkers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h4>{selectedMarker.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
