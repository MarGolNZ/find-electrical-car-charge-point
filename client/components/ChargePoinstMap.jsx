import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )

}