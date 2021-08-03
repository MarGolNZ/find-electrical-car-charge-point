import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]

    const greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <>
            <h3 className='header-text'><i className="fas fa-charging-station"> Find Electrical Charge Point</i></h3>
            <div className='map' data-testid="map-element" style={{ height: '500px', width: '100%' }}>
                <MapContainer className='map-container' center={position} zoom={10} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {props.chargePoints.map(point => <Marker position={[point.AddressInfo.Latitude, point.AddressInfo.Longitude]} icon={greenIcon} key={point.UUID}><Popup>Address: {point.AddressInfo.AddressLine1} {point.AddressInfo.AddressLine2} {point.AddressInfo.StateOrProvince} {point.AddressInfo.Town} <br />Distance from your current location: {Math.round(point.AddressInfo.Distance)}km <br /><a href='#'>Get directions</a></Popup></Marker>)}
                    <Marker position={position}><Popup>Your current Location</Popup></Marker>
                </MapContainer>
            </div>
        </>
    )
}