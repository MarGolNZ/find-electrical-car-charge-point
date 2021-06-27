import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )

}