import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ShowChargePointInfo from './ShowChargePointInfo'

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]
    // const [chargePoint, setChargePoint] = useState({ AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } })


    return (
        <div className='row'>
            <div className='col-6'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%', margin: '0 auto' }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className='col-6'><ShowChargePointInfo position={position} /></div>
        </div >
    )
}