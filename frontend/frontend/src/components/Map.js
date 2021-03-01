import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault, onClickPosition, position }) => {
  const handleClick = (e) => {
    onClickPosition(e.latlng)
    console.log(e.latlng)
  }

  return (
    <MapContainer center={positionDefault} zoom={10} style={{ height: '100%' }} onClick={handleClick}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>This is your marker</Popup>
      </Marker>
    </MapContainer>
  )
}
