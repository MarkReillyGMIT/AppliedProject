import React, { Component, useState, useCallback, useMemo, useRef} from "react";
import {TileLayer, Popup, Marker, MapContainer, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../App.css';
import marker from '../assets/placeholder.png';
import L, { latLng } from 'leaflet';

/**
 * This class developed the Map using React Leaflet.
 */

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor:  [-0, -0],
  iconSize: [32,35],     
});


export const MapComponent = ({ onClickPosition }) => {
  
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        onClickPosition(e.latlng)
        //map.locate()
        
      },
      locationfound(e) {
        setPosition(e.latlng)
        console.log(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={myIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  
  return (
    <div>
      <MapContainer className="map" center={[53.275,-9.0494]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  )
}