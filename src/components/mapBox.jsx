import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the custom marker image
import customMarkerIcon from "../icon/marker.png";

const MapComponent = ({ latitude = null, longitude = null }) => {
  const initialMarkers = [
    { id: 1, latitude: 35.702, longitude: 51.336 },
    // Add more initial markers here if needed
  ];

  // State to hold the markers' positions
  const [markers, setMarkers] = useState(initialMarkers);

  useEffect(() => {
    console.log("longitude", longitude);
    console.log("latitude", latitude);
    if (longitude && latitude) {
      addNewMarker(latitude, longitude);
    }
  }, [longitude, latitude]);

  // Create a custom icon using the customMarkerIcon
  const customIcon = new L.Icon({
    iconUrl: customMarkerIcon,
    iconSize: [32, 32], // Set the width and height of your custom icon
    iconAnchor: [16, 32], // Set the anchor point of your custom icon
  });

  // Ref to access the MapContainer instance
  const mapRef = useRef();

  // Function to add a new marker
  const addNewMarker = (latitude, longitude) => {
    const newMarker = {
      id: markers.length + 1,
      latitude,
      longitude,
    };

    // Update the markers state with the new marker
    setMarkers([...markers, newMarker]);

    // Update the map center to the location of the new marker
    mapRef.current.setView([latitude, longitude], 16);
  };

  // Function to add a new marker when clicking a button
  const handleAddMarkerButtonClick = () => {
    // Replace 35.702 and 51.336 with the desired latitude and longitude for the new marker
    addNewMarker(35.701, 51.391);
  };

  return (
    <>
      <MapContainer
        ref={mapRef} // Set the ref to access the MapContainer instance
        center={[35.702, 51.336]} // Set the initial center of the map
        zoom={16}
        style={{ width: "100%", minHeight: "400px", height: "100%" }}
        onClick={(e) => addNewMarker(e.latlng.lat, e.latlng.lng)} // Add a new marker by clicking the map
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Render all markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.latitude, marker.longitude]}
            icon={customIcon}
          >
            <Popup>Popup content for Marker {marker.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* <button onClick={handleAddMarkerButtonClick}>Add New Marker</button> */}
    </>
  );
};

export default MapComponent;
