import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "25px",
};

const center = {
  lat: 40.712776, // Example latitude (New York)
  lng: -74.005974, // Example longitude (New York)
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCLaR_a-N0rL5I2IWLtxSPwYhDe2uLICZM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Optional: Add markers */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
