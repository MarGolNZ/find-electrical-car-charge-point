import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { divIcon } from 'leaflet';

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]
    const position2 = [{ latitude: -27.38, longitude: 153.03 }, { latitude: - 27.25, longitude: 153.10 },]

    const icon = divIcon({
        html: '<i class="fas fa-plug"></i style="max-width:40px">', iconSize: 40
    })

    return (
        < div className='row' >
            <div className='col-6'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%', margin: '0 auto' }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {position2.map(point => <Marker position={[point.latitude, point.longitude]} icon={icon}></Marker>)}
                    < Marker position={position}><Popup>Your current Location</Popup></Marker>
                </MapContainer>
            </div>
        </div >
    )
}
