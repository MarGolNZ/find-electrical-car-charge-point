import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]
    const icon = L.icon({
        iconUrl: '/icon-1.png',
        iconSize: [40, 'auto']
    })

    return (
        <div className='map'>
            <MapContainer className='map-container' center={position} zoom={10} scrollWheelZoom={true} style={{ height: '400px' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.chargePoints.map(point => <Marker position={[point.AddressInfo.Latitude, point.AddressInfo.Longitude]} icon={icon} key={point.UUID}></Marker>)}
                <Marker position={position}><Popup>Your current Location</Popup></Marker>
            </MapContainer>
        </div>
    )
}
