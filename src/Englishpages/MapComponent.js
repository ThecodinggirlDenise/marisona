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
  color: "blue",
};

// Center the camera in Turkey
const center = {
  lat: 38.963745, // Latitude for Turkey (approx. center)
  lng: 35.243322, // Longitude for Turkey (approx. center)
};

// Markers with names
const coastalMarkers = [
  { lat: 26.0937083, lng: -80.1697768, name: "Marina Mile Yachting Center" },
  {
    lat: 25.2591875,
    lng: 55.2799375,
    name: "P&O Marinas - Mina Rashid Marina",
  },
  { lat: 41.0000162, lng: 28.5095115, name: "Güzelce Marina" },

  { lat: 40.9712913, lng: 28.8758019, name: "Ataköy Marina" },
  { lat: 40.962522, lng: 28.6571953, name: "West Marina" },
  { lat: 40.9766184, lng: 29.0377288, name: "Kalamış Marina" },
  { lat: 40.8703749, lng: 29.2351554, name: "Pendik Marina" },
  { lat: 40.8690208, lng: 29.2393745, name: " Pendik Marintürk" },
  { lat: 40.8158386, lng: 29.3161992, name: "Tuzla Marina" },
  { lat: 40.8169342, lng: 29.3201647, name: " Viaport Marina" },
  { lat: 40.3785894, lng: 28.8843082, name: "Mudanya Bursa" },
  { lat: 39.5661431, lng: 26.742636, name: "Altınoluk Liman" },
  { lat: 38.2591944, lng: 26.3800454, name: "Port Alaçatı Pruva" },
  { lat: 39.5661431, lng: 26.742636, name: "Altınoluk Liman" },
  { lat: 38.3952924, lng: 26.7494941, name: "Çeşmealtı Marina" },
  { lat: 38.35232510000001, lng: 26.3118681, name: "Dalyan Marina" },
  { lat: 37.3357168, lng: 27.2626339, name: "D Marin Didim Marina" },
  { lat: 37.2491861, lng: 27.5338236, name: "Port Iasos Marina" },
  { lat: 37.1286016, lng: 27.379593, name: "Türkbükü Balıkçı Barınağı" },
  { lat: 37.1197823, lng: 27.2892242, name: "Yalıkavak Tersanesi" },
  { lat: 37.1046572, lng: 27.2858324, name: "Yalıkavak Marina" },
  { lat: 37.0016579, lng: 27.2572196, name: "Turgut Reis D-Marin" },
  { lat: 37.0228103, lng: 27.3838041, name: "Liman Bitez" },
  { lat: 37.0337169, lng: 27.4238824, name: "Milta Marina Bodrum" },
  { lat: 36.6737682, lng: 28.0649123, name: "Bozburun (Port Bozburun)" },
  { lat: 36.7624979, lng: 28.1091868, name: "Turgut Köyü Ella Yacht Club" },
  { lat: 36.7710208, lng: 28.1273327, name: "Martı Marina Orhaniye" },
  { lat: 36.8513732, lng: 28.2790106, name: "Netsel Marina Marmaris" },
  { lat: 36.7523208, lng: 28.941304, name: "Göcek Marina" },
  { lat: 36.7488185, lng: 28.9427041, name: "D Marin Göcek" },
  { lat: 36.6243675, lng: 29.101128, name: "Ece Marina Fethiye" },
  { lat: 36.6228834, lng: 29.0879795, name: "Fethiye " },
  { lat: 36.2054949, lng: 29.6274636, name: "Kaş Setur Marina " },
  { lat: 36.6006389, lng: 30.5720008, name: "G Marina Kemer " },
  { lat: 35.3416863, lng: 33.3203353, name: "Kyrenia Harbour" },
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
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Blue marker icon
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
