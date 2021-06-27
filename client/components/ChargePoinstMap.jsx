import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import { getChargeInfo } from '../apiClient.js'

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]
    const [chargePoint, setChargePoint] = useState({ AddressInfo: { AddressLine1: '', StateOrProvince: '', Title: '', Town: '' } })

    useEffect(() => {
        getChargeInfo(position)
            .then(pointData => {
                console.log(pointData[0])
                // setChargePoint(pointData[0])
                return null
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )

}