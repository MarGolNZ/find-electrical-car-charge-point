import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Legend } from 'react-leaflet'
import L from 'leaflet';

export default function ChargePoinstMap(props) {
    const position = [props.latitude, props.longitude]
    // const icon = L.icon({
    //     iconUrl: 'vectorstock_33740292.png', // attribution <a href="https://www.vectorstock.com/royalty-free-vector/eco-car-icon-for-web-and-mobile-vector-33740292">Vector image by VectorStock / vectorstock</a>
    //     iconSize: [40, 'auto']
    // })

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
            <div className='header'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='header-text'><i className="fas fa-charging-station"> Find Electrical Charge Point</i></h3>
                    </div>
                </div>
            </div>
            <div className='map'>
                <MapContainer className='map-container' center={position} zoom={10} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
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


//<a href='https://www.freepik.com/vectors/car'>Car vector created by stories - www.freepik.com</a>
