"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet Default Icon Fix for Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function ContactMap() {
  return (
    <MapContainer 
      center={[24.8607, 67.0011]} 
      zoom={13} 
      scrollWheelZoom={false} 
      style={{ height: "100%", width: "100%" }} 
      className="z-10"
    >
      <TileLayer 
        attribution='&copy; <a href="https://carto.com/">CARTO</a>' 
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
      />
      <Marker position={[24.8607, 67.0011]}>
        <Popup>Flashteck HQ <br /> Come visit us!</Popup>
      </Marker>
    </MapContainer>
  );
}